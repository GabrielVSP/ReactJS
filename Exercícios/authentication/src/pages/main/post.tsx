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

        <div>

            <h2>{ post.title }</h2>

            <p>
                {post.content}
            </p>

            <aside>
                @{post.author}
                <button onClick={userLiked ? removeLike : addLike}>
                    {userLiked ? 'Unlike' : 'Like'}
                </button>
                {likes && <span>Likes: {likes.length}</span>}
            </aside>

        </div>

    )

}
 