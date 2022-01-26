import { createContext, useContext, useState } from "react";

const CounterContext = createContext({ counter: 0, setCounter: () => null });

export default function UseContextExample() {
  return (
    <CounterProvider>
      <div>
        <Component1 />
        <Component2 />
      </div>
    </CounterProvider>
  );
}

function CounterProvider(props) {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {props.children}
    </CounterContext.Provider>
  );
}

function Component1() {
  const { counter } = useContext(CounterContext);
  return <div>Counter: {counter}</div>;
}

function Component2() {
  const { setCounter } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
}
