import UseStateExample from "./examples/1-useState";
import UseTimeoutExample from "./examples/10-useTimeout";
import UseDebounceExample from "./examples/11-useDebounce";
import UseAsyncExample from "./examples/12-useAsync";
import UseFetchExample from "./examples/13-useFetch";
import UseReducerExample from "./examples/2-useReducer";
import UseEffectExample from "./examples/3-useEffect";
import UseContextExample from "./examples/4-useContext";
import UseMemoExample from "./examples/5-useMemo";
import UseCallbackExample from "./examples/6-useCallback";
import UseRefExample from "./examples/7-useRef";
import UseImperativeHandleExample from "./examples/8-useImperativeHandler";
import UseLayoutEffectExample from "./examples/9-useLayoutEffect";
import Examples from "./examples/Examples";
import "./styles.css";

const examples = {
  useState: UseStateExample,
  useReducer: UseReducerExample,
  useEffect: UseEffectExample,
  useContext: UseContextExample,
  useMemo: UseMemoExample,
  useCallback: UseCallbackExample,
  useRef: UseRefExample,
  useImperativeHandle: UseImperativeHandleExample,
  useLayoutEffect: UseLayoutEffectExample,
  // CUSTOM
  useTimeout: UseTimeoutExample,
  useDebounce: UseDebounceExample,
  useAsync: UseAsyncExample,
  useFetch: UseFetchExample,
};

export default function App() {
  return <Examples examples={examples} titleAs="h1" />;
}
