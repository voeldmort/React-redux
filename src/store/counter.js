import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };



const counterSlice = createSlice({
    name: 'couter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
         },
        decrement(state) {
            state.counter--;
         },
        toggleCounter(state) { 
            state.showCounter = !state.showCounter;
        },
        increse(state,action) { 
            state.counter = state.counter + action.payload;
        }
    }
        
});
export const counterActions = counterSlice.actions;  
export default counterSlice.reducer;