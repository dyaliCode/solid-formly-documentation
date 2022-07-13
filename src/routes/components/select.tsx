import { IField } from "solid-formly";
import { Component } from "solid-js";
import Code from "~/components/Doc/Code";
import Form from "~/components/Doc/Form";
import LayoutMain from "~/components/Layouts/LayoutMain";

const code = `const fields: IField[] = [
  {
    type: "select", // required
    name: "name-field-select", // required
    attributes: {
      id: "id-field-select", // required
      classes: ["form-control"], // optional
      label: "Label field select", // optional
      disabled: false, // optional
    },
    extra: {
      options: [
        {
          value: 1,
          title: "option 1",
        },
        {
          value: 2,
          title: "option 2",
        },
      ],
    },
  },
  {
    type: "select", // required
    name: "name-field-select2", // required
    attributes: {
      id: "id-field-select2", // required
      classes: ["form-control"], // optional
      label: "Label field select2", // optional
      disabled: true, // optional
    },
    extra: {
      options: [
        {
          value: 1,
          title: "option 3",
        },
        {
          value: 2,
          title: "option 4",
        },
      ],
    },
  },
];`;

const Select: Component = () => {
  const fields: IField[] = [
    {
      type: "select", // required
      name: "name-field-select", // required
      attributes: {
        id: "id-field-select", // required
        classes: ["form-control"], // optional
        label: "Label field select", // optional
        disabled: false, // optional
      },
      extra: {
        options: [
          {
            value: 1,
            title: "option 1",
          },
          {
            value: 2,
            title: "option 2",
          },
        ],
      },
    },
    {
      type: "select", // required
      name: "name-field-select2", // required
      attributes: {
        id: "id-field-select2", // required
        classes: ["form-control"], // optional
        label: "Label field select2", // optional
        disabled: true, // optional
      },
      extra: {
        options: [
          {
            value: 1,
            title: "option 3",
          },
          {
            value: 2,
            title: "option 4",
          },
        ],
      },
    },
  ];

  return (
    <LayoutMain>
      <h3>Select</h3>
      <article>
        <Form form_name="formly_select" fields={fields} />
      </article>
      <article>
        <Code code={code} />
      </article>
    </LayoutMain>
  );
};

export default Select;
