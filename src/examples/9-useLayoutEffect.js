import { useEffect, useLayoutEffect, useState } from "react";
import Examples from "./Examples"

const examples = {
  "usando o useEffect": Example1,
  "usando o useLayoutEffect": Example2,
}

export default function UseLayoutEffectExample() {
  return <Examples examples={examples} />
}

function Example1() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  return (
    <div onClick={() => setValue(0)}>value: {value}</div>
  );
}

function Example2() {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  return (
    <div onClick={() => setValue(0)}>value: {value}</div>
  );
}