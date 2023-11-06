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

        <section>
            
            <h1>Sign-in to continue</h1>
            <button onClick={login}>Sign in</button>

        </section>

    )

}