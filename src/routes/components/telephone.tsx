import { IField } from "solid-formly";
import { Component } from "solid-js";
import Code from "~/components/Doc/Code";
import Form from "~/components/Doc/Form";
import LayoutMain from "~/components/Layouts/LayoutMain";

const code = `const fields: IField[] = [
  {
    type: 'input', // required
    name: 'name-field-tel', // required
    value: '', // optional
    attributes: {
      type: 'tel', // default = text, or password, email, number, tel, optional
      id: 'id-field-tel', // optional
      classes: ['form-control'], // optional
      label: 'Label field tel', // optional
      placeholder: 'Placeholder field tel', // optional
      disabled: false, // optional
      readonly: false // optional
    }
  }
];`;

const Telephone: Component = () => {
  const fields: IField[] = [
    {
      type: "input", // required
      name: "name-field-tel", // required
      value: "", // optional
      attributes: {
        type: "tel", // optional and default type = text or change to password, email, number, tel, optional
        id: "id-field-tel", // optional
        classes: ["form-control"], // optional
        label: "Label field tel", // optional
        placeholder: "Placeholder field tel", // optional
        disabled: false, // optional
        readonly: false, // optional
      },
    },
  ];

  return (
    <LayoutMain>
      <h3>Telephone</h3>
      <article>
        <Form form_name="formly_telephone" fields={fields} />
      </article>
      <article>
        <Code code={code} />
      </article>
    </LayoutMain>
  );
};

export default Telephone;
