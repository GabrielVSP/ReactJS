import { useSelector } from "react-redux"


export default function Home() {

    const username = useSelector((state: any) => state.user.value.username)

    return (

        <h1>Home, {username}</h1>

    )

}