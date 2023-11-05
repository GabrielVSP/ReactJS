import { useState } from "react"

interface Props {
    namee?: string,
    email: string,
    age: number,
    isMarried: boolean,
    friends?: Props,
    country?: Country,
    nationality?: string
}

export enum Country {

    Brazil = "Brazil",
    Canada = "Canada",
    France = "France",

}

export default function Person(props: Props) {

    const [name, setName] = useState<string>('')

    return (

        <div>

            <p>Name: {props.namee}</p>
            <p>Email: {props.email}</p>
            <p>Age: {props.age}</p>
            <p>Is married: {props.isMarried ? 'Yes' : 'No'}</p>

            <h2>Friends: </h2>

            {props.friends && Object.keys(props.friends).map((friend: Props, i) => {

                console.log(friend.age)
                return <p key={i}>{friend.namee}</p>

            })}

            <h2>Country</h2>

            <p>Country: {props.country}</p>

        </div>

    )

}