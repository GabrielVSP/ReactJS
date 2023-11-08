import React from 'react';
import {useState, useEffect} from 'react'

import { getDocs, collection } from 'firebase/firestore';
import { database } from '../../config/firebase';
import Post from './post';

export interface Post {

    id: string,
    userId: string,
    title: string,
    author: string,
    content: string

}

export default function Main() {

    const postsCol = collection(database, 'posts')

    const [postList, setPostList] = useState<Post[] | null>(null)

    async function getPosts() {

        const data = await getDocs(postsCol)
        setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[])

    }

    useEffect(() => {
      
        getPosts()

    }, [])
    

    return (

        <section>
            
            {postList?.map((post, key) => <Post post={post} key={key}/> )}

        </section>

    )

}