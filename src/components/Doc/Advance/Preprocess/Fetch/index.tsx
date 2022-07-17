import { Component, createSignal } from "solid-js";
import { IField, IForm } from "solid-formly";
import Form from "./Form";
import Code from "~/components/Doc/Code";

const code = `import { createSignal } from "solid-js";
import { Formly, IValue, IField } from "solid-formly";

const Form = () => {
  const [loading, setLoading] = createSignal<boolean>(false);

  // Fetch Users
  const fetchUsers = async () => {
    const res = await fetch(
      "https://jsonplaceholder.cypress.io/users?_limit=10"
    );
    const data = await res.json();
    return data.map((item) => ({ value: item.id, title: item.name }));
  };

  // Fetch posts
  const fetchPosts = async () => {
    const res = await fetch(
      "https://jsonplaceholder.cypress.io/posts?_limit=10"
    );
    const data = await res.json();
    return data.map((item) => ({ value: item.id, title: item.title }));
  };

  const onSubmit = (data: IValue) => {
    console.log(data);
  };


  const fields: IField[] = [
    {
      type: "select",
      name: "category",
      attributes: {
        id: "category",
        label: "Category",
      },
      rules: ["required"],
      extra: {
        options: [
          {
            value: null,
            title: "None",
          },
          {
            value: 1,
            title: "Users",
          },
          {
            value: 2,
            title: "Posts",
          },
        ],
      },
    },
    {
      type: "select",
      name: "items",
      attributes: {
        id: "items",
        label: "Items",
      },
      extra: {},
      preprocess: async (field: IField, fields: IField[], values: any) => {
        if (values.touched === "category") {
          setLoading(true);
          field.extra.options =
            values.category == 1 ? await fetchUsers() : await fetchPosts();
          setLoading(false);
        }
        return field;
      },
    },
  ];
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

const Example: Component = () => {
  const [loading, setLoading] = createSignal<boolean>(false);

  // Fetch Users
  const fetchUsers = async () => {
    const res = await fetch(
      "https://jsonplaceholder.cypress.io/users?_limit=10"
    );
    const data = await res.json();
    return data.map((item) => ({ value: item.id, title: item.name }));
  };

  // Fetch posts
  const fetchPosts = async () => {
    const res = await fetch(
      "https://jsonplaceholder.cypress.io/posts?_limit=10"
    );
    const data = await res.json();
    return data.map((item) => ({ value: item.id, title: item.title }));
  };

  const fields: IField[] = [
    {
      type: "select",
      name: "category",
      attributes: {
        id: "category",
        label: "Category",
      },
      rules: ["required"],
      extra: {
        options: [
          {
            value: null,
            title: "None",
          },
          {
            value: 1,
            title: "Users",
          },
          {
            value: 2,
            title: "Posts",
          },
        ],
      },
    },
    {
      type: "select",
      name: "items",
      attributes: {
        id: "items",
        label: "Items",
      },
      extra: {},
      preprocess: async (field: IField, fields: IForm, values: any) => {
        if (values.touched === "category") {
          setLoading(true);
          field.extra.options =
            values.category == 1 ? await fetchUsers() : await fetchPosts();
          setLoading(false);
        }
        return field;
      },
    },
  ];

  return (
    <>
      <strong>1- fetch example</strong>
      <article>
        <p>
          <code>
            <b>1- fetch api example</b>
          </code>
        </p>
        <p>
          <small>
            <i>
              here <u>solid-formly</u> fetch data type from jsonplaceholder by
              value category
            </i>
          </small>
        </p>
        <p>
          <code>
            <i>fetch: </i>
            <u>{loading() ? "loading..." : "done!"}</u>
          </code>
        </p>
        <Form fields={fields} form_name="formly_fetch" />
      </article>
      <article>
        <Code code={code} />
      </article>
    </>
  );
};

export default Example;
