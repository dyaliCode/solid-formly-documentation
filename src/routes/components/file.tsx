import { IField } from "solid-formly";
import { Component } from "solid-js";
import Code from "~/components/Doc/Code";
import Form from "~/components/Doc/Form";
import LayoutMain from "~/components/Layouts/LayoutMain";

const code = `const fields: IField[] = [
  {
    type: 'file', // required
    name: 'name-file', // require
    attributes: {
      id: 'id-field', // optional
      classes: ['form-control'], // optional
      label: 'Image', // optional
    },
    extra: {
      multiple: true, // optional
      showPreview: true // optional
    },
    rules: ['file'],
    file: { // need to add this attribute object if you need a file rule
      types: 'jpg,gif,png',
      maxsize: 5,
    },
  },
];`;

const File: Component = () => {
  const fields: IField[] = [
    {
      type: "file", // required
      name: "name-file", // require
      attributes: {
        id: "id-field", // optional
        classes: ["form-control"], // optional
        label: "Image", // optional
      },
      extra: {
        multiple: true, // optional
        showPreview: true, // optional
      },
      rules: ["file"],
      file: {
        // need to add this attribute object if you need a file rule
        types: "jpg,gif,png",
        maxsize: 5,
      },
    },
  ];

  return (
    <LayoutMain>
      <h3>File</h3>
      <article>
        <Form form_name="formly_file" fields={fields} />
      </article>
      <article>
        <Code code={code} />
      </article>
    </LayoutMain>
  );
};

export default File;
