import { useEffect, useState } from "react"
import { useAsync } from "./12-useAsync"

export default function UseFetchExample() {
  const [id, setId] = useState(1)
  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  )

  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId(currentId => currentId + 1)}>
        Increment ID
      </button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  )
}

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
}

function useFetch(url, options = {}, dependencies = []) {
  return useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
  }, dependencies)
}



function useEventListiner(event, callback, deps) {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback, ...deps])
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEventListiner("resize", () => setWidth(window.innerWidth), []);

  return width;
}