import "./preview.css";
import { useEffect, useRef } from "react";
import { html } from "./html";

interface PreviewProps {
  code: string;
  err: string;
}

export const Preview: React.FC<PreviewProps> = (code, err) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        title="preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {err && <div className="preview-error">{err}</div>}
    </div>
  );
};
