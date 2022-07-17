import { Component } from "solid-js";
import { IField, IForm } from "solid-formly";
import Form from "./Form";
import Code from "~/components/Doc/Code";

const code = `import { createSignal, Show } from "solid-js";
import { Formly, IValue, IField } from "solid-formly";

const form_name = "formly_calculator";
const fields: IField[] = [
  {
    type: "input",
    name: "number_a",
    attributes: {
      type: "number",
      id: "number_a",
      label: "Number A",
    },
    rules: ["required"],
  },
  {
    type: "input",
    name: "number_b",
    attributes: {
      type: "number",
      id: "number_b",
      label: "Number B",
    },
    rules: ["required"],
  },
  {
    type: "input",
    name: "total",
    attributes: {
      id: "total",
      type: "number",
      label: "Total = Number A + Number B",
    },
    preprocess: (field: IField, fields: IForm, values: any) => {
      if (values.touched === "number_a" || values.touched === "number_b") {
        field.value = parseInt(values.number_a) + parseInt(values.number_b);
      }
      return field;
    },
  },
];

const Form = () => {
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

const fields: IField[] = [
  {
    type: "input",
    name: "number_a",
    attributes: {
      type: "number",
      id: "number_a",
      label: "Number A",
    },
    rules: ["required"],
  },
  {
    type: "input",
    name: "number_b",
    attributes: {
      type: "number",
      id: "number_b",
      label: "Number B",
    },
    rules: ["required"],
  },
  {
    type: "input",
    name: "total",
    attributes: {
      id: "total",
      type: "number",
      label: "Total = Number A + Number B",
      disabled: true,
    },
    preprocess: (field: IField, fields: IField, values: any) => {
      if (values.touched === "number_a" || values.touched === "number_b") {
        field.value = parseInt(values.number_a) + parseInt(values.number_b);
      }
      return field;
    },
  },
];

const Example: Component = () => {
  return (
    <>
      <p>
        <code>
          <b>1- calculator example</b>
        </code>
      </p>
      <article>
        <Form fields={fields} form_name="formly_calculator" />
      </article>
      <article>
        <Code code={code} />
      </article>
    </>
  );
};

export default Example;
