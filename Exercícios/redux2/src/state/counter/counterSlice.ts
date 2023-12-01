import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Axios from 'axios'

interface CounterState {
    value: number
}

const initialState: CounterState = {

    value: 0

}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, /*action*/) => {
            state.value += 1 //Isso só pode ser feito com o CreateSlice
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {

        builder
        .addCase(incrementAsync.pending, () => {
            console.log(incrementAsync.pending)
        })

        .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload
        })
    }
})

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        /*Axios.get('https://api.adviceslip.com/advice').then((res) => {

            return res.data.slip.id
  
        })*/

        const n = await Axios.get('https://api.adviceslip.com/advice')
        amount = n.data.slip.id

        return amount
       
    }
)

export const { increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer
