import { createSignal, Show } from "solid-js";
import { Formly, IValue, IField } from "solid-formly";

declare type IProps = {
  form_name: string;
  fields: IField[];
};

const Form = (props: IProps) => {
  const [values, setValues] = createSignal<any>(null);

  const onSubmit = (data: IValue) => {
    setValues(data);
  };

  return (
    <>
      <Show when={values()}>
        <pre>
          <code>{JSON.stringify(values(), null, 2)}</code>
        </pre>
      </Show>

      <Formly
        form_name={props.form_name}
        fields={props.fields}
        onSubmit={onSubmit}
        btnSubmit={{
          text: "Send",
        }}
        btnReset={{
          text: "Reset",
          classes: ["outline", "btn-primary"],
        }}
        real={true}
      />
    </>
  );
};

export default Form;
