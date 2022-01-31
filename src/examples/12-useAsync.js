import { useCallback, useEffect, useState } from "react";
import Examples from "./Examples";

const examples = {
  "com erro": Example2,
  "sem erro": Example1,
};
export default function UseAsyncExample() {
  return <Examples examples={examples} titleAs="h2" />;
}

function Example1() {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hi");
      }, 1000);
    });
  });

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error}</div>
      <div>Value: {value}</div>
    </div>
  );
}

function Example2() {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error");
      }, 1000);
    });
  });

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error}</div>
      <div>Value: {value}</div>
    </div>
  );
}

export function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}
