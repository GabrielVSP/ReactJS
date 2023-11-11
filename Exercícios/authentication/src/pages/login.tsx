import React from 'react';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate()

    async function login() {

        
        const sigin = await signInWithPopup(auth, provider)
        navigate('/')

    }

    return (

        <section className='text-center text-white'>
            
            <h1 className='text-2xl mt-3'>Sign-in to continue</h1>
            <button className="w-1/3 mt-1 p-1 text-lg bg-purple-400 md:w-1/12" onClick={login}>Sign in</button>

        </section>

    )

}