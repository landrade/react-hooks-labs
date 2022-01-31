import { memo, useCallback, useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import Examples from "./Examples";

const examples = {
  "elemento dom": memo(Example1),
  "count interactions": memo(Example2),
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
  const interactions = useRef(0);
  const [counter, setCounter] = useState(() => 0);
  const increment = useCallback(() => {
    interactions.current++;
    setCounter((prev) => prev + 1)
  }, []);
  const decrement = useCallback(() => {
    interactions.current++;
    setCounter((prev) => prev - 1)
  }, []);
  return (
    <>
      <div>Interections: {interactions.current}</div>
      <div>
        <div>Counter: {counter}</div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

// Exemplo repassando o elemento para o componente
function render(elm, props) {
  Vue.render(elm, <ComponentXyz {...props} />)
}

function RenderReactDOM(props) {
  const ref = useRef()

  useEffect(() => {
    render(ref.current, props)
  }, [])

  return <div ref={ref}></div>
}
