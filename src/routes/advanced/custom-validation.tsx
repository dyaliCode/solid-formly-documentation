import { getValues, IField } from "solid-formly";
import { Component } from "solid-js";
import Code from "~/components/Doc/Code";
import Form from "~/components/Doc/Form";
import LayoutMain from "~/components/Layouts/LayoutMain";

const code = `const Form: Component = () => {
  const form_name = "custom_validation";

  async function correctName() {
    const values = getValues(form_name);
    if (values) {
      if (values.myname != "hey i am solidjs") {
        return false;
      }
      return true;
    }
    return false;
  }

  const fields: IField[] = [
    {
      type: "input",
      name: "myname",
      attributes: {
        type: "text",
        id: "myname",
        label: "Name",
        placeholder: "Tap i am solidjs", // optional
      },
      rules: ["required", { name: "correctName", fnc: correctName }],
      messages: {
        correctName: "Should say: hey i am solidjs",
      },
      preprocess: (field, fields, values) => {
        return field;
      },
    },
  ];

  return (
    <Formly
      form_name={form_name}
      fields={fields}
      onSubmit={onSubmit}
    />
  );
};

export default Form;
`;

const CustomValidation: Component = () => {
  const form_name = "custom_validation";

  async function correctName() {
    const values = getValues(form_name);
    if (values) {
      if (values.myname != "hey i am solidjs") {
        return false;
      }
      return true;
    }
    return false;
  }

  const fields: IField[] = [
    {
      type: "input",
      name: "myname",
      attributes: {
        type: "text",
        id: "myname",
        label: "Name",
        placeholder: "Tap i am solidjs", // optional
      },
      rules: ["required", { name: "correctName", fnc: correctName }],
      messages: {
        correctName: "Should say: hey i am solidjs",
      },
      preprocess: (field, fields, values) => {
        return field;
      },
    },
  ];

  return (
    <LayoutMain>
      <h3>Custom Validation</h3>
      <article>
        <Form form_name={form_name} fields={fields} />
      </article>
      <article>
        <Code code={code} />
      </article>
    </LayoutMain>
  );
};

export default CustomValidation;
