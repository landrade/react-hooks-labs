import { useMemo, useState } from "react";

function range(total) {
  console.log("generating values");
  return [...Array(total).keys()];
}

export default function UseMemoExample() {
  const [counter, setCounter] = useState(0);
  const [totalItems, setTotalItems] = useState(1000);
  // const generatedValues = range(totalItems)
  const generatedValues = useMemo(() => range(totalItems), [totalItems]);

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

function Values(props) {
  return props.values.map((value) => <div key={value}>{value}</div>);
}
