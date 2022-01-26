import { useReducer } from "react";
import Examples from "./Examples";

const examples = {
  example1: Example1,
  example2: Example2
};

export default function UseReducerExample() {
  return <Examples examples={examples} />;
}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    default:
      throw new Error();
  }
};

const init = (initialValue) => {
  console.log("init");
  return { counter: initialValue, name: "Leo" };
};

function Example1() {
  const [state, dispatch] = useReducer(reducer, init(0));
  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return (
    <div>
      <div>State: {JSON.stringify(state)}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function Example2() {
  const [state, dispatch] = useReducer(reducer, 0, init);
  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return (
    <div>
      <div>State: {JSON.stringify(state)}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
