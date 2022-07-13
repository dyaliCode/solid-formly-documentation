import { IField } from "solid-formly";
import { Component } from "solid-js";
import Code from "~/components/Doc/Code";
import Form from "~/components/Doc/Form";
import LayoutMain from "~/components/Layouts/LayoutMain";

const code = `const fields: IField[] = [
  {
    type: "textarea", // required
    name: "name-field-textarea", // required
    value: "", // optional
    attributes: {
      id: "id-field-textarea", // optional
      classes: ["form-control"], // optional
      label: "Label field textarea", // optional
      placeholder: "Placeholder field tel", // optional
      disabled: false, // optional
      readonly: false, // optional
      rows: 14, // optional
      cols: 8, // optional
    },
  },
];`;

const Textarea: Component = () => {
  const fields: IField[] = [
    {
      type: "textarea", // required
      name: "name-field-textarea", // required
      value: "", // optional
      attributes: {
        id: "id-field-textarea", // optional
        classes: ["form-control"], // optional
        label: "Label field textarea", // optional
        placeholder: "Placeholder field textarea", // optional
        disabled: false, // optional
        readonly: false, // optional
        rows: 14, // optional
        cols: 8, // optional
      },
    },
  ];

  return (
    <LayoutMain>
      <h3>Textarea</h3>
      <article>
        <Form form_name="formly_textarea" fields={fields} />
      </article>
      <article>
        <Code code={code} />
      </article>
    </LayoutMain>
  );
};

export default Textarea;
