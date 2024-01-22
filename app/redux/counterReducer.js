import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
    value: 20,
    title: 'Jupiter',
}

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 10;
    },
    decrement: (state) => {
        state.value -= 10;
    },  
    incrementByAmount: (state, action) => {
        state.value += action.payload;
    }
  }
})

export const { increment, decrement, incrementByAmount } = counter.actions
export default counter.reducer