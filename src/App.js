import UseStateExample from "./examples/1-useState";
import UseReducerExample from "./examples/2-useReducer";
import UseEffectExample from "./examples/3-useEffect";
import UseContextExample from "./examples/4-useContext";
import UseMemoExample from "./examples/5-useMemo";
import UseCallbackExample from "./examples/6-useCallback";
import UseRefExample from "./examples/7-useRef";
import Examples from "./examples/Examples";
import "./styles.css";

const examples = {
  useState: UseStateExample,
  useReducer: UseReducerExample,
  useEffect: UseEffectExample,
  useContext: UseContextExample,
  useMemo: UseMemoExample,
  useCallback: UseCallbackExample,
  useRef: UseRefExample
};

export default function App() {
  return <Examples examples={examples} titleAs="h1" />;
}
