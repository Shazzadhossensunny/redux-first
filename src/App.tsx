import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  return (
    <>
      <h1>Redux</h1>
      <div className="card">
        <button aria-label="Decrement value" onClick={decrementHandler}>
          Decrement
        </button>
        <span>{count}</span>
        <button aria-label="Increment value" onClick={incrementHandler}>
          Increment
        </button>
      </div>
    </>
  );
}

export default App;
