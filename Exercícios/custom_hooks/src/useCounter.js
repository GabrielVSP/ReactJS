import { useState } from "react"

export default function useCounter(num = 0) {

    const [val, setVal] = useState(num)

    function increase() {

        setVal(() => val + 1)

    }

    function decrease() {

        setVal(() => val - 1)

    }

    function reset() {

        setVal(0)

    }

    return [val, increase, decrease, reset]

}