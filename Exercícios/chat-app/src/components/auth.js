import '../App.css'
import {auth, provider} from '../firebase'
import {signInWithPopup} from 'firebase/auth'
import Cookies from 'universal-cookie'

import Header from './header'

const cookies = new Cookies()

export default function Auth({setIsAuth}) {

    async function signIn() {

        try {
            const result = await signInWithPopup(auth, provider)
            cookies.set('auth-token', result.user.refreshToken)
            setIsAuth(true)
        }
        catch {
            console.error("Couldn't login")
        }
        

    }

    return (
        <>
        
        <section className="auth">
            <p>Sign in With Google to Continue</p>
            <button onClick={signIn}>Sign-in with Google</button>
        </section>
        </>
    )



}