import React from 'react';
import '../index.css'
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

        <header>
        
            <nav className="flex p-2 justify-between items-center bg-purple-700 text-white text-lg md:justify-around">

                <div className='flex justify-evenly'>
                    <Link className="p-1 hover:text-xl" to='/'>Home</Link>
                    {!user ? <Link className="p-1 hover:text-xl" to='/login'>Login</Link> :
                    <Link className="p-1 hover:text-xl" to='/createpost'>Create post</Link>}
                </div>
                
                <div className="flex justify-around items-center">
                    {user && <>
                        <img className='w-1/4 rounded-full ' src={user?.photoURL || ''} alt="Profile" />
                        <div className='w-1 h-4 bg-purple-900'></div>
                        <button onClick={logout}>Logout</button>
                    </>}
                </div>

            </nav>

        </header>

    )

}