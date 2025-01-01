import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  const incrementHandler = (amount: number) => {
    dispatch(increment(amount));
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
        <button
          aria-label="Increment value"
          onClick={() => incrementHandler(1)}
        >
          Increment
        </button>
        <button
          aria-label="Increment value"
          onClick={() => incrementHandler(5)}
        >
          Increment by 5
        </button>
      </div>
    </>
  );
}

export default App;
