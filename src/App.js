import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add, decrement, increment } from "./store";
//to access the store we have to use the useStore hook
// the useDispatch hook is used to dispatch actions // send data to the store

function App() {
  const dispatch = useDispatch();
  const increamentHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const addHandler = () => {
    dispatch(add(10));
  };

  //get initial state from the store
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  return (
    <div className="App">
      <h1>Couter</h1>
      <h2>{counter}</h2>
      <button onClick={increamentHandler}>increase</button>
      <button onClick={decrementHandler}>decrease</button>
      <button onClick={addHandler}>Add</button>
    </div>
  );
}

export default App;
