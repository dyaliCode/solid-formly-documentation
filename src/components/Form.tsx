import { useLocation } from "solid-app-router";
import { createMemo, createSignal } from "solid-js";
import {
  Formly,
  IValue,
  IField,
} from "/mnt/E656FADC56FAAC85/Projects/SolidJs/packages/solid-formly";
import Prism from "prismjs";

declare type IProps = {
  fields: IField[];
};

const Form = (props: IProps) => {
  const location = useLocation();
  const pathname = createMemo(() =>
    location.pathname.replace(new RegExp("/", "g"), "-")
  );
  const form_name = pathname();

  const [values, setValues] = createSignal<any>({});

  const onSubmit = (data: IValue) => {
    console.log("DATA FORM 1", data);
    setValues(data);
  };

  return (
    <>
      <pre>
        <code>
          <div
            innerHTML={Prism.highlight(
              JSON.stringify(values(), null, 2),
              Prism.languages.javascript,
              "javascript"
            )}
          ></div>
        </code>
      </pre>
      <Formly
        form_name={form_name}
        fields={props.fields}
        onSubmit={onSubmit}
        btnSubmit={{
          text: "Send",
        }}
        btnReset={{
          text: "Reset",
          classes: ["outline", "btn-primary"],
        }}
      />
    </>
  );
};

export default Form;
