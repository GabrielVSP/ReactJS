import React from 'react'
import { useState } from "react"

interface Props {

    initialValue: number

}

export default function Counter(props:Props) {

    const [val, setVal] = useState(props.initialValue)

    function increase() {

        setVal(() => val + 1)

    }

    function decrease() {

        setVal(() => val - 1)

    }

    function reset() {

        setVal(props.initialValue)

    }

    async function call() {

        /*axios.get('https://catfact.ninja/fact').then((res) => {
             console.log(res)
        })*/
       
    }

    return (

        <>
            <h2 data-testid="count">{val}</h2>

            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <button onClick={call}>Call</button>
        </>

    )

}
