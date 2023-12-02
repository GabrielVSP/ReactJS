import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface btnsState {
    value: number
}

var initialState: btnsState = {
    value: 0
}

const curImgSlice = createSlice({
    name: 'CurrentImage',
    initialState,
    reducers: {
        next: (state, action: PayloadAction<number>) => {
            state.value = state.value + 2 > action.payload ? 0 : state.value + 1
        },
        previous: (state, action: PayloadAction<number>) => {
            state.value = state.value - 1 < 0 ? action.payload - 1 : state.value - 1
        }
    }
})

export const {next, previous} = curImgSlice.actions
export const store = configureStore({
    reducer:{ 
        CurrentImage: curImgSlice.reducer
    }
})

