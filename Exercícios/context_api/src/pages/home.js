import { useContext } from "react"
import { Link } from "react-router-dom"
import { Axios } from 'axios'

import {AppContext} from '../App'
import { useQuery } from "@tanstack/react-query"

export default function Home() {

    const {username} = useContext(AppContext)
    /*const { data } = useQuery(['cat'], () => {

       return Axios.get('https://https://catfact.ninja/').then((res) => res.data)

    })*/

    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['catFact'],
        queryFn: () =>
          fetch('https://catfact.ninja/fact').then(
            (res) => res.json(),
          ),
      })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (

        <div>

            <h1>Home page</h1>
            
            <Link to={'/'}>Home</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/menu'}>Menu</Link>

            <h2>Hello, {username}!</h2>

            <button onClick={refetch}>Generate</button>
            <p>Cat fact: {data?.fact}</p>

        </div>

    )

}