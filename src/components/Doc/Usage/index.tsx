import { Component } from "solid-js";
import { IField } from "solid-formly";
import Form from "./Form";
import Code from "../Code";

const code = `import { createSignal, Show } from "solid-js";
import { Formly, IValue, IField } from "solid-formly";

const form_name = "formly_usage";
const fields: IField[] = [
  {
    type: "input",
    name: "firstname",
    attributes: {
      type: "text",
      id: "firstname",
      classes: ["form-control"],
      placeholder: "Tap your first name",
    },
    rules: ["required", "min:3", "max:10"],
    messages: {
      required: "The firstname is required",
      min: "Your firstname is too short min=3",
      max: "Your firstname is too long max=10",
    },
  },
  {
    type: "input",
    name: "password",
    attributes: {
      type: "password",
      id: "password",
      classes: ["form-control"],
      placeholder: "Tap your first name",
    },
    rules: ["required", "min:6", "max:10"],
    messages: {
      required: "The password is required",
      min: "Your password is too short min=6",
      max: "Your password is too long max=10",
    },
  },
];

const Form = () => {
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
`;

const fields: IField[] = [
  {
    type: "input",
    name: "firstname",
    attributes: {
      type: "text",
      id: "firstname",
      classes: ["form-control"],
      placeholder: "Tap your first name",
    },
    rules: ["required", "min:3", "max:10"],
    messages: {
      required: "The firstname is required",
      min: "Your firstname is too short min=3",
      max: "Your firstname is too long max=10",
    },
  },
  {
    type: "input",
    name: "password",
    attributes: {
      type: "password",
      id: "password",
      classes: ["form-control"],
      placeholder: "Tap your password",
    },
    rules: ["required", "min:6", "max:10"],
    messages: {
      required: "The password is required",
      min: "Your password is too short min=6",
      max: "Your password is too long max=10",
    },
  },
];

const Example: Component = () => {
  return (
    <section>
      <h3>Usage</h3>
      <article>
        <Form fields={fields} form_name="formly_usage" />
      </article>
      <article>
        <Code code={code} />
      </article>
    </section>
  );
};

export default Example;
