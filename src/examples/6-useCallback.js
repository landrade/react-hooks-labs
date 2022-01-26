import { memo, useCallback, useState } from "react";
import Examples from "./Examples";

const examples = {
  "sem useCallback": Example1,
  "com useCallback": Example2
};
export default function UseCallbackExample() {
  return <Examples examples={examples} titleAs="h2" />;
}

function Example1() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);
  return (
    <div>
      <CounterDisplay counter={counter} />
      <CounterControl increment={increment} decrement={decrement} />
    </div>
  );
}

function Example2() {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter((prev) => prev + 1), []);
  const decrement = useCallback(() => setCounter((prev) => prev - 1), []);
  return (
    <div>
      <CounterDisplay counter={counter} />
      <CounterControl increment={increment} decrement={decrement} />
    </div>
  );
}

const CounterDisplay = (props) => {
  return <div>Counter: {props.counter}</div>;
};

const CounterControl = memo((props) => {
  console.log("rendering CounterControl");
  return (
    <div>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>+</button>
    </div>
  );
});
