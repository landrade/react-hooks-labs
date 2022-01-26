import { useState } from "react";

const examples = {
  example1: Example1,
  example2: Example2,
  example3: Example3
};

export default function UseStateExample() {
  const [example, setExample] = useState("example1");
  const Example = examples[example];
  return (
    <div>
      {Object.entries(examples).map(([k, v]) => {
        return (
          <button key={k} onClick={() => setExample(k)}>
            {k}
          </button>
        );
      })}
      <h2>{example}</h2>
      <Example />
    </div>
  );
}

function Example1() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function Example2() {
  const [state, setState] = useState({ counter: 0, name: "Leo" });
  const increment = () =>
    setState((prevState) => ({ ...prevState, counter: prevState.counter + 1 }));
  const decrement = () =>
    setState((prevState) => ({ ...prevState, counter: prevState.counter - 1 }));

  return (
    <div>
      <div>State: {JSON.stringify(state)}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function expensibleState() {
  console.log("expensibleState");
  return 1000;
}

function Example3() {
  const [counter, setCounter] = useState(expensibleState());
  // const [counter, setCounter] = useState(() => expensibleState());
  const increment = () => setCounter((prevState) => prevState + 1);
  const decrement = () => setCounter((prevState) => prevState - 1);

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
