import { Button } from "./components/ui/button";
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
        <Button aria-label="Decrement value" onClick={decrementHandler}>
          Decrement
        </Button>
        <span className="mx-4">{count}</span>
        <Button
          aria-label="Increment value"
          onClick={() => incrementHandler(1)}
        >
          Increment
        </Button>
        <Button
          aria-label="Increment value"
          onClick={() => incrementHandler(5)}
        >
          Increment by 5
        </Button>
      </div>
    </>
  );
}

export default App;
