import { useState } from 'react'

export default function useOpacity(initialValue = false) {

    const [state, setState] = useState(initialValue)

    function toggle() {

        setState(() => !state)

    }

    return [state, toggle]

}