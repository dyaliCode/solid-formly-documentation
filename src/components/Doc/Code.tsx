import { Component, lazy } from "solid-js";
import Prism from "prismjs";
import PrismJsx from "prismjs/components/prism-jsx.min";
// import styles from "./Code.module.scss";

type IProps = {
  code: string;
};

const Code: Component<IProps> = (props: IProps) => {
  return (
    <div class="code-wrapper" style={`position: relative`}>
      <a
        href="#"
        class="secondary code-copy"
        aria-label="copy"
        style={`position: absolute;
        right: 10px;
        top: 10px;
        border: solid 1px #ddd;
        padding: 5px;
        border-radius: 4px;`}
        onClick={async (e) => {
          e.preventDefault();
          if ("clipboard" in navigator) {
            return await navigator.clipboard.writeText(props.code);
          } else {
            return document.execCommand("copy", true, props.code);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-copy"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </a>
      <pre>
        <code class="javascript">
          <div
            innerHTML={Prism.highlight(
              props.code,
              Prism.languages.javascript,
              "language-tsx"
            )}
          ></div>
        </code>
      </pre>
    </div>
  );
};

export default Code;
