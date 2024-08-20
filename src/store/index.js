// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';


//We must not mutate the the exisitng state , rather we should create a new object ans send the data into it.
// But the redux toolkit uses a package which do all these things for us so directly we  can do it. but the state is not getting mutated.


// Reducer function is to update the data in the store
//OLD Way
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'toggle') {
            
//         return {
//             showCounter: ! state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// }

// Pointing the reducer function in the store
// const store = createStore(counterReducer);

// Setting the slice reducer
// const store = createStore(counterSlice.reducer);
// For multiple store we can use configurestore from redux-toolkit

// For SingleSlice
// const store = configureStore({
//     reducer : counterSlice.reducer
// });



// for the multiple reducer we can create a map
const store = configureStore({
    reducer:
    {
        // counter: counterSlice.reducer,
        // auth:authSlice.reducer
        counter: counterReducer,
        auth:authReducer
    }
});

// This now creates our redux store


//  From here we need to connect it with the React app so the event dispatch will be done from the componet.


// Now we will have access to all the reducer function and we don't have to make the action object from out own.

export default store;


// We have to provide our store to the React app so we have to go to the highest level we can go in our react app.



