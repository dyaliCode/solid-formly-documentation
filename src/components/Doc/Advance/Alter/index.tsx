import { Component } from "solid-js";
import { IField, IForm } from "solid-formly";
import Form from "./Form";
import Code from "../../Code";

const code = `import { Formly, IValue, IField } from "solid-formly";

const form_name = "formly_alter";
const fields: IField[] = [
  {
    type: "input",
    name: "firstname",
    attributes: {
      type: "text",
      id: "firstname",
      placeholder: "Tap your first name",
    },
  },
  {
    type: "input",
    name: "password",
    attributes: {
      type: "password",
      id: "password",
      placeholder: "Tap your password",
    },
  },
];

const Form = () => {
  const onSubmit = (data: IValue) => {
    console.log(data);
  };

  return (
    <Formly
      form_name={form_name}
      fields={fields}
      onSubmit={onSubmit}
      btnSubmit={{
        text: "Send Text", // text updated
        classes: ["btn-primary"], // classes updated
      }}
      btnReset={{
        text: "Reset Text", // , // text updated
        classes: ["outline", "btn-primary"], // classes updated
      }}
    />
  );
};

export default Form;`;

const fields: IField[] = [
  {
    type: "input",
    name: "firstname",
    attributes: {
      type: "text",
      id: "firstname",
      placeholder: "Tap your first name",
    },
  },
  {
    type: "input",
    name: "password",
    attributes: {
      type: "password",
      id: "password",
      placeholder: "Tap your password",
    },
  },
];

const Example: Component = () => {
  return (
    <section>
      <h3>Alter Form</h3>
      <article>
        <Form fields={fields} form_name="formly_alter" />
      </article>
      <article>
        <Code code={code} />
      </article>
    </section>
  );
};

export default Example;
