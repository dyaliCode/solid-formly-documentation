import { IField } from "solid-formly";
import { Component } from "solid-js";
import Code from "~/components/Doc/Code";
import Form from "~/components/Doc/Form";
import LayoutMain from "~/components/Layouts/LayoutMain";

const code = `const fields: IField[] = [
  {
    type: "input", // required
    name: "name-field-text", // required
    value: "", // optional
    attributes: {
      type: "text", // default = text, or password, email, number, tel, optional
      id: "id-field-text", // optional
      classes: ["form-control"], // optional
      label: "Label field text", // optional
      placeholder: "Placeholder field text", // optional
      disabled: false, // optional
      readonly: false, // optional
    },
  },
];`;

const Text: Component = () => {
  const fields: IField[] = [
    {
      type: "input", // required
      name: "name-field-text", // required
      value: "", // optional
      attributes: {
        type: "text", // default = text, or password, email, number, tel, optional
        id: "id-field-text", // optional
        classes: ["form-control"], // optional
        label: "Label field text", // optional
        placeholder: "Placeholder field text", // optional
        disabled: false, // optional
        readonly: false, // optional
      },
    },
  ];

  return (
    <LayoutMain>
      <h3>Text</h3>
      <article>
        <Form form_name="formly_text" fields={fields} />
      </article>
      <article>
        <Code code={code} />
      </article>
    </LayoutMain>
  );
};

export default Text;
