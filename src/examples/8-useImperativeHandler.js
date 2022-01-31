import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export default function UseImperativeHandleExample() {
  const ref = useRef();
  const foo = useCallback(() => ref.current.foo(), []);

  return (
    <div>
      <Component ref={ref} />
      <button onClick={foo}>Clique aqui</button>
    </div>
  );
}

const Component = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    foo: () => console.log("foo"),
  }));
  return <div>oi</div>;
});
