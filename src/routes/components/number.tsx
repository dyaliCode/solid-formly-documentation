import { IField } from "solid-formly";
import { Component } from "solid-js";
import Code from "~/components/Doc/Code";
import Form from "~/components/Doc/Form";
import LayoutMain from "~/components/Layouts/LayoutMain";

const code = `const fields: IField[] = [
  {
    type: 'input', // required
    name: 'name-field-number', // required
    value: '', // optional
    attributes: {
      type: 'number', // default = text, or password, email, number, tel, optional
      id: 'id-field-number', // optional
      classes: ['form-control'], // optional
      label: 'Label field number', // optional
      placeholder: 'Placeholder field number', // optional
      disabled: false, // optional
      readonly: false // optional
    }
  }
];`;

const Number: Component = () => {
  const fields: IField[] = [
    {
      type: "input", // required
      name: "name-field-number", // required
      value: "", // optional
      attributes: {
        type: "number", // default = text, or password, email, number, tel, optional
        id: "id-field-number", // optional
        classes: ["form-control"], // optional
        label: "Label field number", // optional
        placeholder: "Placeholder field number", // optional
        disabled: false, // optional
        readonly: false, // optional
      },
    },
  ];

  return (
    <LayoutMain>
      <h3>Number</h3>
      <article>
        <Form form_name="formly_number" fields={fields} />
      </article>
      <article>
        <Code code={code} />
      </article>
    </LayoutMain>
  );
};

export default Number;
