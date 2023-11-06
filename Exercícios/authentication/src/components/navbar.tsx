import React from 'react';
import { Link } from "react-router-dom"
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Navbar() {

    const [user] = useAuthState(auth)

    async function logout() {

        await signOut(auth)

    }

    return (

        <nav>

            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            
            <div>
                {user && <>
                    <p>{ user?.displayName }</p>
                    <img src={user?.photoURL || ''} alt="Profile" width="100" height="100"/>
                    <button onClick={logout}>Logout</button>
                </>}
            </div>

        </nav>

    )

}