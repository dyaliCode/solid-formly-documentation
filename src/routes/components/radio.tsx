import { IField } from "solid-formly";
import { Component } from "solid-js";
import Code from "~/components/Doc/Code";
import Form from "~/components/Doc/Form";
import LayoutMain from "~/components/Layouts/LayoutMain";

const code = `const fields: IField[] = [
  {
    type: "radio", // required
    name: "name-field-radio", // required
    attributes: {
      id: "id-field-radio", // required
      classes: ["form-check-input"], // optional
      label: "First",
    },
    extra: {
      items: [
        {
          id: "radio1",
          value: 1,
          title: "radio 1",
        },
        {
          id: "radio2",
          value: 2,
          title: "radio 2",
        },
      ],
      aligne: "inline",
    },
    prefix: {
      tag: "div",
      classes: ["form-group"],
    },
  },
  {
    type: "radio", // required
    name: "name-field-radio2", // required
    attributes: {
      id: "id-field-radio2", // required
      classes: ["form-check-input"], // optional
      label: "Second",
    },
    extra: {
      items: [
        {
          id: "radio3",
          value: 3,
          title: "radio 3",
        },
        {
          id: "radio4",
          value: 4,
          title: "radio 4",
        },
      ],
      aligne: "default",
    },
    prefix: {
      tag: "div",
      classes: ["form-group"],
    },
  },
];`;

const Radio: Component = () => {
  const fields: IField[] = [
    {
      type: "radio", // required
      name: "name-field-radio", // required
      attributes: {
        id: "id-field-radio", // required
        classes: ["form-check-input"], // optional
        label: "First",
      },
      extra: {
        items: [
          {
            id: "radio1",
            value: 1,
            title: "radio 1",
          },
          {
            id: "radio2",
            value: 2,
            title: "radio 2",
          },
        ],
        aligne: "inline",
      },
      prefix: {
        tag: "div",
        classes: ["form-group"],
      },
    },
    {
      type: "radio", // required
      name: "name-field-radio2", // required
      attributes: {
        id: "id-field-radio2", // required
        classes: ["form-check-input"], // optional
        label: "Second",
      },
      extra: {
        items: [
          {
            id: "radio3",
            value: 3,
            title: "radio 3",
          },
          {
            id: "radio4",
            value: 4,
            title: "radio 4",
          },
        ],
        aligne: "default",
      },
      prefix: {
        tag: "div",
        classes: ["form-group"],
      },
    },
  ];

  return (
    <LayoutMain>
      <h3>Radio</h3>
      <article>
        <Form form_name="formly_radio" fields={fields} />
      </article>
      <article>
        <Code code={code} />
      </article>
    </LayoutMain>
  );
};

export default Radio;
