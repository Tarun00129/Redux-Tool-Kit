import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        dcrement: state => {
            state.value -= 1;
        },
        resetCount: state => {
            state.value = 0;
        },
        changesByAction: (state, action) => {
            state.value += Number(action.payload);
        }
    }
})

export const { increment, changesByAction, dcrement, resetCount } = countSlice.actions
export default countSlice.reducer