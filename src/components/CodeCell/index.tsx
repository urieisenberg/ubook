import { useState } from "react";
import { CodeEditor } from "../CodeEditor";
import { Preview } from "../Preview";
import { bundle } from "../../bundler";

export const index = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <>
      <CodeEditor
        initialValue="import React from 'react'"
        onChange={(value) => setInput(value)}
      />
      <>
        <button onClick={onClick}>Submit</button>
      </>
      <Preview code={code} />
    </>
  );
};
