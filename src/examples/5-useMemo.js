import { memo, useEffect, useMemo, useState } from "react";
import Examples from "./Examples";

const examples = {
  "sem useMemo": Example1,
  "com useMemo": Example2,
}
export default function UseMemoExample() {
  return <Examples examples={examples} />  
}

function range(total) {
  console.log("generating values");
  return [...Array(total).keys()];
}

function Example1() {
  const [counter, setCounter] = useState(0);
  const [totalItems, setTotalItems] = useState(1000);
  const generatedValues = range(totalItems)

  return (
    <div>
      <Counter counter={counter} setCounter={setCounter} />
      <div>totalItems: {totalItems}</div>
      <input
        onChange={(evt) => setTotalItems(parseInt(evt.target.value, 10))}
        value={totalItems}
      />
      <div>
        <Values values={generatedValues} />
      </div>
    </div>
  );
}



function Example2() {
  const [counter, setCounter] = useState(0);
  const [totalItems, setTotalItems] = useState(1000);
  const generatedValues = useMemo(() => range(1000), []);
  
  return (
    <div>
      <Counter counter={counter} setCounter={setCounter} />
      <div>totalItems: {totalItems}</div>
      <input
        onChange={(evt) => setTotalItems(parseInt(evt.target.value, 10))}
        value={totalItems}
      />
      <div>
        <Values values={generatedValues} />
      </div>
    </div>
  );
}

function Counter(props) {
  return (
    <div>
      <div>Counter: {props.counter}</div>
      <div>
        <button onClick={() => props.setCounter((prev) => prev - 1)}>-</button>
        <button onClick={() => props.setCounter((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
}

const Values = memo((props) => {
  return props.values.map((value) => <div key={value}>{value}</div>);
});

// Exemplo de implementacao do useMemo
// const useMemo = (fn, deps) => {
//   const [state, setState] = useState();
//   useEffect(() => {
//     setState(fn())
//   }, deps)

//   return state;
// }