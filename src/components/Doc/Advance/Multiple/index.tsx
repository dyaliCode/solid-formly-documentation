import { Component } from "solid-js";
import { getValues, IField, IForm } from "solid-formly";
import Form from "./Form";
import Code from "../../Code";

const code = `// form sign in
const form_name_a="formly_a";
const fieldsA: IField[] = [
  {
    type: "input",
    name: "email",
    attributes: {
      type: "text",
      id: "email",
      placeholder: "Tap your email",
    },
  },
  {
    type: "input",
    name: "password",
    attributes: {
      type: "password",
      id: "password",
      placeholder: "Tap your password",
    },
  },
];

// form sign up
const form_name_b="formly_b";
const confirmPassword = async () => {
  const values = await getValues("formly_b"); // await is required.

  if (values) {
    if (values.password != values.confirmPassword) {
      return false;
    }
  }
  return true;
};

const fieldsB: IField[] = [
  {
    type: "input",
    name: "email",
    attributes: {
      type: "text",
      id: "email_register",
      placeholder: "Tap your email",
    },
  },
  {
    type: "input",
    name: "password",
    attributes: {
      type: "password",
      id: "password_register",
      placeholder: "Tap your password",
    },
  },
  {
    type: "input",
    name: "confirm_password",
    attributes: {
      type: "password",
      id: "confirm_password",
      placeholder: "Tap your confirm password",
    },
    rules: [confirmPassword],
  },
];

const Form: Component = () => {
  return (
    <>
      <section>
        <h1>Sign in</h1>
        <Formly
          form_name={form_name_a}
          fields={fieldsA}
          ...
        />
      </section>
      <section>
        <h1>Sign up</h1>
        <Formly
          form_name={form_name_b}
          fields={fieldsB}
          ...
        />
      </section>
    </>
  );
};

export default Form;

`;

const fieldsA: IField[] = [
  {
    type: "input",
    name: "email",
    attributes: {
      type: "text",
      id: "email",
      placeholder: "Tap your email",
    },
  },
  {
    type: "input",
    name: "password",
    attributes: {
      type: "password",
      id: "password",
      placeholder: "Tap your password",
    },
  },
];

const confirmPassword = async () => {
  const values = await getValues("formly_b");
  if (values) {
    if (values.password != values.confirm_password) {
      return false;
    }
  }
  return true;
};

const fieldsB: IField[] = [
  {
    type: "input",
    name: "email",
    attributes: {
      type: "text",
      id: "email_register",
      placeholder: "Tap your email",
    },
  },
  {
    type: "input",
    name: "password",
    attributes: {
      type: "password",
      id: "password_register",
      placeholder: "Tap your password",
    },
  },
  {
    type: "input",
    name: "confirm_password",
    attributes: {
      type: "password",
      id: "confirm_password",
      placeholder: "Tap your confirm password",
    },
    rules: [{ name: "confirmPassword", fnc: confirmPassword }],
    messages: {
      confirmPassword: "Password and confirm password must be same",
    },
  },
];

const Multiple: Component = () => {
  return (
    <section>
      <h3>Multiple Form</h3>
      <p>
        <code>
          <b>In one component, you can create a multiple forms</b>
        </code>
      </p>
      <article>
        <h4>Sign in</h4>
        <Form fields={fieldsA} form_name="formly_a" />
      </article>
      <article>
        <h4>Sign up</h4>
        <Form fields={fieldsB} form_name="formly_b" />
      </article>
      <article>
        <Code code={code} />
      </article>
    </section>
  );
};

export default Multiple;
