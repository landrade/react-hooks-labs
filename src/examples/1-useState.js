import { useEffect, useState } from "react";
import Examples from "./Examples";

const examples = {
  "Exemplo 1 - Simples": Example1,
  "Exemplo 2.1 - Set state baseado no state anterior - errado": Example2Wrong,
  "Exemplo 2.2 - Set state baseado no state anterior - certo": Example2Right,
  "Exemplo 3 - Merge com state anterior": Example3,
  "Examplo 4 - expensible default values": Example4,
  "Examplo 5 - expensible default values right way": Example5
};

export default function UseStateExample() {
  return <Examples examples={examples} />
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

function Example2Wrong() {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(state + 1);
    setState(state + 1);
    setState(state + 1);
  }, [])

  return (
    <div>
      <div>State: {state}</div>
    </div>
  );
}

function Example2Right() {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(prevState => prevState + 1);
    setState(prevState => prevState + 1);
    setState(prevState => prevState + 1);
  }, [])

  return (
    <div>
      <div>State: {state}</div>
    </div>
  );
}

function Example3() {
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

function Example4() {
  const [counter, setCounter] = useState(expensibleState());
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

function Example5() {
  const [counter, setCounter] = useState(() => expensibleState());
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
