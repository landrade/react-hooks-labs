import { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [name, setName] = useState("Leo");
  const [show, setShow] = useState(true);

  return (
    <>
      <input onChange={(evt) => setName(evt.target.value)} value={name} />
      {!show && <button onClick={() => setShow(true)}>show</button>}
      {show && <button onClick={() => setShow(false)}>hide</button>}
      {show && <InternalComponent name={name} />}
    </>
  );
}

function InternalComponent(props) {
   useEffect(() => {
     console.log("useEffect: deps = undefined");
     return () => console.log("teardown: useEffect: deps = undefined");
   });

  useEffect(() => {
    console.log("useEffect: deps = []");
    return () => console.log("teardown: useEffect: deps = []");
  }, []);

  useEffect(() => {
    console.log("useEffect: deps = [props.name]", props.name);
    return () =>
      console.log("teardown: useEffect: deps = [props.name]", props.name);
  }, [props.name]);

  return <div>{props.name}</div>;
}

// Como funciona el teardown
// const unsubscribe = (id) => {
//   clearInterval(id)
// }

// const subscribe = (fn) => {
//   const id = setInterval(fn, 1000);
//   return () => unsubscribe(id);
// }

// const unsub = subscribe(() => {})
// unsub();
