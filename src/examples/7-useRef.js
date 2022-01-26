import { memo, useCallback, useRef, useState } from "react";
import Examples from "./Examples";

const examples = {
  "elemento dom": memo(Example1),
  "render count": memo(Example2)
};

export default function UseRefExample() {
  return <Examples examples={examples} />;
}

function Example1() {
  const inputRef = useRef();
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>focus</button>
    </div>
  );
}

function Example2() {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter((prev) => prev + 1), []);
  const decrement = useCallback(() => setCounter((prev) => prev - 1), []);
  return (
    <Counter counter={counter} increment={increment} decrement={decrement} />
  );
}

const Counter = (props) => {
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  return (
    <div>
      <div>Rendered: {renderCount.current}</div>
      <div>Counter: {props.counter}</div>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>+</button>
    </div>
  );
};
