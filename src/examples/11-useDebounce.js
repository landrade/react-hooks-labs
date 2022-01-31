import { useEffect, useState } from "react"
import { useTimeout } from "./10-useTimeout"

export default function UseDebounceExample() {
  const [count, setCount] = useState(10)
  useDebounce(() => console.log(count), 1000, [count])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}

function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay)
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [])
}