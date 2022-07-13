import { IField } from "solid-formly";
import { Component } from "solid-js";
import Code from "~/components/Doc/Code";
import Form from "~/components/Doc/Form";
import LayoutMain from "~/components/Layouts/LayoutMain";

const code = `const fields: IField[] = [
  {
    type: 'input', // required
    name: 'name-field-password', // required
    value: '', // optional
    attributes: {
      type: 'password', // default = text, or password, email, number, tel, optional
      id: 'id-field-password', // optional
      classes: ['form-control'], // optional
      label: 'Label field password', // optional
      placeholder: 'Placeholder field password', // optional
      disabled: false, // optional
      readonly: false // optional
    }
  }
];`;

const Password: Component = () => {
  const fields: IField[] = [
    {
      type: "input", // required
      name: "name-field-password", // required
      value: "", // optional
      attributes: {
        type: "password", // default = text, or password, email, number, tel, optional
        id: "id-field-password", // optional
        classes: ["form-control"], // optional
        label: "Label field password", // optional
        placeholder: "Placeholder field password", // optional
        disabled: false, // optional
        readonly: false, // optional
      },
    },
  ];

  return (
    <LayoutMain>
      <h3>Password</h3>
      <article>
        <Form form_name="formly_password" fields={fields} />
      </article>
      <article>
        <Code code={code} />
      </article>
    </LayoutMain>
  );
};

export default Password;
