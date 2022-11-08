import MonacoEditor from "@monaco-editor/react";

export const CodeEditor = () => {
  return (
    <MonacoEditor
      height="90vh"
      language="javascript"
      theme="vs-dark"
    />
  );
};
