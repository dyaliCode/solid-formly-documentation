import { Component } from "solid-js";
import Prism from "prismjs";

type IProps = {
  code: string;
};

const Code: Component<IProps> = (props: IProps) => {
  return (
    <pre>
      <code class="javascript">
        <div
          innerHTML={Prism.highlight(
            props.code,
            Prism.languages.javascript,
            "javascript"
          )}
        ></div>
      </code>
    </pre>
  );
};

export default Code;
