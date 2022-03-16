import { configureStore, createSlice } from "@reduxjs/toolkit";

//create a slice

const initialState = {
  counter: 0,
};
const counterSlice = createSlice({
  //name of the slice
  name: "counter",
  //initial state
  initialState,
  //reducer which are the actions in form of functions
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    add: (state, action) => {
      state.counter += action.payload;
    },
  },
});

//configure the store
const store = configureStore({
  reducer: counterSlice.reducer,
});

//export actions
export const { increment, decrement, add } = counterSlice.actions;

//export the store
export default store;
