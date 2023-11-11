import React, { useEffect, useState } from 'react'
import { Post as postInterface } from './main'
import { auth, database } from '../../config/firebase'
import { addDoc, deleteDoc, getDocs, collection, query, where, doc } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

interface Props {
    post: postInterface
}

interface LikeInterface {
    userId: string;
    likeId: string
}

export default function Post(props: Props) {

    const { post } = props
    const [user] = useAuthState(auth)

    const [likes, setLikes] = useState<LikeInterface[] | null>(null)
    const userLiked = likes?.find((like) => like.userId === user?.uid)

    const likesCol = collection(database, 'likes')
    const likesDoc = query(likesCol, where("postId", "==", post.id))

    async function getLikes() {

        const data = await getDocs(likesDoc)
        setLikes(data.docs.map((doc) => ({userId: doc.data().userId, likeId: doc.id })))

    }

    async function addLike() {

        try {

            const newDoc = await addDoc(likesCol, {
                userId: user?.uid,
                postId: post.id
            })

            if(user) {
                setLikes((prev) => prev ? [...prev, {userId: user?.uid, likeId: newDoc.id }] : [ {userId: user?.uid, likeId: newDoc.id}])
            } 
        } catch(e) {
            console.error(e)
        }

    }

    async function removeLike() {

        try {

            const deleteQuery = query(likesCol, where("postId", "==", post.id), where('userId', '==', user?.uid))
            const deleteData = await getDocs(deleteQuery)
            const likeId = deleteData.docs[0].id

            const deletingLike = doc(database, 'likes', likeId)

            await deleteDoc(deletingLike)

            if(user) {
                setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeId))
            } 
        } catch(e) {
            console.error(e)
        }

    }

    useEffect(() => {

        getLikes()

    }, [])

    return (

        <div className='w-10/12 p-2 mt-3 rounded-lg text-white md:w-2/3' style={{backgroundColor: '#1a2235'}}>

            <h2 className='text-3xl'>{ post.title }</h2>

            <p className='my-3 text-lg indent-2'>
                {post.content}
            </p>

            <div>
                <button onClick={userLiked ? removeLike : addLike}>
                    <span className="relative top-1 p-1 material-symbols-outlined" style={{color: userLiked ? '#8b5cf6' : 'white'}}>
                        {/*userLiked ? 'thumb_down' : 'thumb_up'*/}
                        thumb_up
                    </span>
                    
                </button>
                {likes && <span>{likes.length}</span>}
            </div>

            <aside className='font-bold mt-2'>
                @{post.author}
            </aside>

        </div>

    )

}
 