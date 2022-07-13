import { IField } from "solid-formly";
import { Component } from "solid-js";
import Code from "~/components/Doc/Code";
import Form from "~/components/Doc/Form";
import LayoutMain from "~/components/Layouts/LayoutMain";

const code = `const fields: IField[] = [
  {
    type: "input", // required
    name: "name-field-range", // required
    value: 0,
    attributes: {
      type: "range", // required
      id: "id-field-range", // required
      classes: ["form-control"], // optional
      label: "Label field range", // optional
      min: 0, // required
      max: 100, // required
      step: 10 // required
    }
  }
];`;

const Range: Component = () => {
  const fields: IField[] = [
    {
      type: "input", // required
      name: "name-field-range", // required
      value: 0,
      attributes: {
        type: "range", // required
        id: "id-field-range", // required
        classes: ["form-control"], // optional
        label: "Label field range", // optional
        min: 0, // required
        max: 100, // required
        step: 10, // required
      },
    },
  ];

  return (
    <LayoutMain>
      <h3>Range</h3>
      <article>
        <Form form_name="formly_text" fields={fields} />
      </article>
      <article>
        <Code code={code} />
      </article>
    </LayoutMain>
  );
};

export default Range;
