import { useContext } from "react"
import { Link } from "react-router-dom"

import {AppContext} from '../App'

export default function Home() {

    const {username} = useContext(AppContext)

    return (

        <div>

            <h1>Home page</h1>
            
            <Link to={'/'}>Home</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/menu'}>Menu</Link>

            <h2>Hello, {username}!</h2>

        </div>

    )

}