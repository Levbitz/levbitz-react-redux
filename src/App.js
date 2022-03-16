import "./App.css";
import { useSelector, useDispatch } from "react-redux";
//to access the store we have to use the useStore hook
// the useDispatch hook is used to dispatch actions // send data to the store

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increamentHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const addHandler = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
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
