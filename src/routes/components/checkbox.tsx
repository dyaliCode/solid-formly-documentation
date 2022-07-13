import { IField } from "solid-formly";
import { Component } from "solid-js";
import Code from "~/components/Doc/Code";
import Form from "~/components/Doc/Form";
import LayoutMain from "~/components/Layouts/LayoutMain";

const code = `const fields: IField[] = [
  {
    type: "checkbox",
    name: "check1",
    attributes: {
      id: "check1",
      label: "Checkbox Default:",
      classes: ["checker"],
    },
    extra: {
      items: [
        {
          name: "item1",
          value: "value1",
          title: "Value 1",
        },
        {
          name: "item2",
          value: "value2",
          title: "Value 2",
        },
      ],
    },
    prefix: {
      tag: "tag",
      classes: ["form-group"],
    },
  },
  {
    type: "checkbox",
    name: "check2",
    attributes: {
      id: "check2",
      label: "Checkbox Inline:",
      classes: ["checker"],
    },
    extra: {
      aligne: "inline",
      items: [
        {
          name: "item1",
          value: "value1",
          title: "Value 1",
        },
        {
          name: "item2",
          value: "value2",
          title: "Value 2",
        },
      ],
    },
    prefix: {
      tag: "div",
      classes: ["form-group"],
    },
  },
];`;

const Checkbox: Component = () => {
  const fields: IField[] = [
    {
      type: "checkbox",
      name: "check1",
      attributes: {
        id: "check1",
        label: "Checkbox Default:",
        classes: ["checker"],
      },
      extra: {
        items: [
          {
            name: "item1",
            value: "value1",
            title: "Value 1",
          },
          {
            name: "item2",
            value: "value2",
            title: "Value 2",
          },
        ],
      },
      prefix: {
        tag: "div",
        classes: ["form-group"],
      },
    },
    {
      type: "checkbox",
      name: "check2",
      attributes: {
        id: "check2",
        label: "Checkbox Inline:",
        classes: ["checker"],
      },
      extra: {
        aligne: "inline",
        items: [
          {
            name: "item1",
            value: "value1",
            title: "Value 1",
          },
          {
            name: "item2",
            value: "value2",
            title: "Value 2",
          },
        ],
      },
      prefix: {
        tag: "div",
        classes: ["form-group"],
      },
    },
  ];

  return (
    <LayoutMain>
      <h3>Checkbox</h3>
      <article>
        <Form form_name="formly_checkbox" fields={fields} />
      </article>
      <article>
        <Code code={code} />
      </article>
    </LayoutMain>
  );
};

export default Checkbox;
