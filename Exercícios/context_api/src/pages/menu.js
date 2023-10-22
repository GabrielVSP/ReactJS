import { Link } from "react-router-dom"
import ChangeProfile from "../components/changeUser"

import { useContext } from "react"
import { AppContext } from "../App"

export default function Menu() {

    const {username} = useContext(AppContext)

    return (

        <div>

            <h1>Menu page</h1>

            <Link to={'/'}>Home</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/menu'}>Menu</Link>

            <div>
                <h2>Username: {username}</h2>
                <ChangeProfile />
            </div>

        </div>

    )

}