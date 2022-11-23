import "./code-cell.css";
import { useState, useEffect } from "react";
import { CodeEditor } from "../CodeEditor";
import { Preview } from "../Preview";
import { Resizable } from "../Resizable";
import { bundle } from "../../bundler";

export const CodeCell = () => {
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div className="code-cell">
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue="import { useState, useEffect } from 'react';"
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};
