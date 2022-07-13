import { IField } from "solid-formly";
import { Component } from "solid-js";
import Code from "~/components/Doc/Code";
import Form from "~/components/Doc/Form";
import LayoutMain from "~/components/Layouts/LayoutMain";

const code = `const fields: IField[] = [
  {
    type: 'input', // required
    name: 'name-field-email', // required
    value: '', // optional
    attributes: {
      type: 'email', // default = text, or password, email, number, tel, optional
      id: 'id-field-email', // optional
      classes: ['form-control'], // optional
      label: 'Label field email', // optional
      placeholder: 'Placeholder field email', // optional
      disabled: false, // optional
      readonly: false // optional
    },
    rules: ["email"], // optional
  }
];`;

const Email: Component = () => {
  const fields: IField[] = [
    {
      type: "input", // required
      name: "name-field-email", // required
      value: "", // optional
      attributes: {
        type: "email", // default = text, or password, email, number, tel, optional
        id: "id-field-email", // optional
        classes: ["form-control"], // optional
        label: "Label field email", // optional
        placeholder: "Placeholder field email", // optional
        disabled: false, // optional
        readonly: false, // optional
      },
      rules: ["email"],
    },
  ];

  return (
    <LayoutMain>
      <h3>Email</h3>
      <article>
        <Form form_name="formly_email" fields={fields} />
      </article>
      <article>
        <Code code={code} />
      </article>
    </LayoutMain>
  );
};

export default Email;
