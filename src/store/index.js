//import redux
import { createStore, applyMiddleware } from "redux";

//but the state is an object // contains the state of the app// which is a object
const reducerFn = (state = { counter: 0 }, action) => {
  //check the type of action
  //if the type is INCREMENT
  //then return the new state
  //else return the old state
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "ADD") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }

  return state;
};

//but the store needs a reducer
const store = createStore(reducerFn);

export default store;
