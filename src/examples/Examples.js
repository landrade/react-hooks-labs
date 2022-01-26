import { useState } from "react";

export default function Examples(props) {
  const [example, setExample] = useState(() => Object.keys(props.examples)[0]);
  const Example = props.examples[example];
  const TitleAs = props.titleAs || "h2";
  return (
    <div>
      {Object.entries(props.examples).map(([k, v]) => {
        return (
          <button key={k} onClick={() => setExample(k)}>
            {k}
          </button>
        );
      })}
      <TitleAs>{example}</TitleAs>
      <Example />
    </div>
  );
}
