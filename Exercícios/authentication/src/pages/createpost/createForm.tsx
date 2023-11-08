import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useNavigate } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth'

import { addDoc, collection } from 'firebase/firestore'
import { database, auth } from '../../config/firebase'

interface CreateFormData {
    title: string,
    content: string
}

export default function CreateForm() {

    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const scheme = yup.object({
        title: yup.string().required('You must add a title'),
        content: yup.string().required('You must add the content').max(500)
    })

    const {register, handleSubmit, formState: {errors}} = useForm<CreateFormData>({
        resolver: yupResolver(scheme)
    })

    const postsCol = collection(database, 'posts')
    
    async function onCreate(data: CreateFormData) {

        await addDoc(postsCol, {
            ...data,
            author: user?.displayName,
            userId: user?.uid
        })
        navigate('/')

    }

    return (

        <form method="post" onSubmit={handleSubmit(onCreate)}>

            <div>
                <input type="text" placeholder="Title" {...register('title')} />
                <p>{errors.title?.message}</p>
            </div>

            <div>
                <textarea id="content" placeholder='Content' {...register('content')}></textarea>
                <p>{errors.content?.message}</p>
            </div>

            <input type='submit' />

        </form>

    )

}