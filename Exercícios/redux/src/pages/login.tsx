import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { login, logout } from "../store"

export default function Login() {

    const [newUser, setNewUser] = useState<string>("")

    const dispatch = useDispatch()

    return (

        <>
            <h1>Login</h1>
            <input type="text" name="user"  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewUser(e.target.value)}/>
            <button onClick={() => dispatch(login({username: newUser}))}>Login</button>
            <button onClick={() => dispatch(logout())}>Log-out</button>
        </>

    )

}