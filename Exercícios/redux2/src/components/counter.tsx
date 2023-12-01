import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../state/store"
import { decrement, increment, incrementAsync, incrementByAmount } from "../state/counter/counterSlice"
import Axios from "axios"

export default function Counter() {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()

    return (

        <section>

            <h2>{count}</h2>

            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increase by 5</button>
            <button onClick={() => dispatch(incrementAsync(1))}>Increase async</button>

        </section>

    )

}