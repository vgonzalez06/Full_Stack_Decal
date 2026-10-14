import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

function CounterPage() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  // Reset the counter to 0 if it ever goes negative
  useEffect(() => {
    if (counter < 0) {
      setCounter(0);
    }
  }, [counter]);

  // Announce in the console whenever the counter passes 5
  useEffect(() => {
    if (counter > 5) {
      console.log("You passed 5!");
    }
  }, [counter]);

  return (
    <div>
      <h1>Counter</h1>
      <CounterDisplay counter={counter} />
      <CounterControls onIncrement={increment} onDecrement={decrement} />
      {counter > 5 && <p>You passed 5!</p>}
    </div>
  );
}

export default CounterPage;
