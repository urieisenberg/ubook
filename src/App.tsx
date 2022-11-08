import React, { useState } from "react";
import { CodeEditor } from "./components/CodeEditor";

function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <CodeEditor
        initialValue="import React from 'react'"
        onChange={(value) => setInput(value)}
      />
    </>
  );
}

export default App;
