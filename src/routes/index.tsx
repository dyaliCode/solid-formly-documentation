import Prism from "prismjs";
import { IField } from "/mnt/E656FADC56FAAC85/Projects/SolidJs/packages/solid-formly";
import Form from "~/components/Form";
import Aside from "~/components/Partials/Aside";
import Header from "~/components/Partials/header";

const JSCode = `import { Component } from "solid-js";
import { Formly, IField, IValue } from "solid-formly";

const Index: Component = () => {
  const fields: IField[] = [
    {
      type: "input",
      name: "firstname",
      attributes: {
        type: "text",
        id: "firstname",
        classes: ["form-control"],
        placeholder: "Tap your first name",
      },
      rules: ["required", "min:3", "max:10"],
      messages: {
        min: "Your firstname is too short min=3",
        max: "Your firstname is too long max=10",
      },
    },
  ];

  const onSubmit = (data: IValue) => {
    console.log("data", data);
  };

  return (
    <Formly
      form_name={form_name}
      fields={props.fields}
      onSubmit={onSubmit}
      btnSubmit={{
        text: "Send",
      }}
      btnReset={{
        text: "Reset",
        classes: ["outline", "btn-primary"],
      }}
    />
  );
};

export default Index;
`;

const fields: IField[] = [
  {
    type: "input",
    name: "firstname",
    attributes: {
      type: "text",
      id: "firstname",
      classes: ["form-control"],
      placeholder: "Tap your first name",
    },
    rules: ["required", "min:3", "max:10"],
    messages: {
      min: "Your firstname is too short min=3",
      max: "Your firstname is too long max=10",
    },
  },
];

export default function Home() {
  return (
    <>
      <Header />
      {/* Start main */}
      <main class="container" id="docs">
        <Aside />

        <div role="document">
          <section id="introduction">
            <hgroup>
              <h1>Introduction</h1>
              <h2>
                Solid Formly generate a dynamic forms with custom rules and
                styles for application's <a href="#">Solidjs</a>,{" "}
                <a href="#">Solid-Start</a> 🙂!
              </h2>
            </hgroup>

            <ul class="mb-0">
              <li>
                <i class="fa fa-bolt">&nbsp;</i>
                Generate dynamic and reactive forms.
              </li>
              <li>
                <i class="fa fa-grin-stars">&nbsp;</i>
                Easy to extend with custom field type and validation.
              </li>
            </ul>

            <h3>Installation</h3>
            <p>
              <code>
                npm install <i>solid-formly</i>
              </code>
            </p>

            <h3>Usage</h3>

            <article>
              <Form fields={fields} />
            </article>
            <article>
              <pre>
                <code class="javascript">
                  <div
                    innerHTML={Prism.highlight(
                      JSCode,
                      Prism.languages.javascript,
                      "javascript"
                    )}
                  ></div>
                </code>
              </pre>
            </article>
          </section>
          {/* <section id="start">
            <hgroup>
              <h1>Usage</h1>
              <h2>Works without package manager or dependencies 🙂!</h2>
            </hgroup>
            <p>There are 4 ways to get started with pico.css:</p>
            <h3>Install manually</h3>
            <p>
              <a href="https://github.com/picocss/pico/archive/refs/heads/master.zip">
                Download Pico
              </a>
              and link <code>/css/pico.min.css</code> in the
              <code>
                &lt;<b>head</b>&gt;
              </code>{" "}
              of your website.
            </p>
            <pre>
              <code>
                &lt;<b>link</b> <i>rel</i>=<u>"stylesheet"</u> <i>href</i>=
                <u>"css/pico.min.css"</u>&gt;
              </code>
            </pre>
            <h3>Install from CDN</h3>
            <p>
              Alternatively, you can use
              <a href="https://unpkg.com/@picocss/pico@latest/">unpkg CDN</a> to
              link pico.css
            </p>
          </section> */}

          {/* Footer */}
          <footer>
            <hr />
            <p>
              <small>
                Code licensed
                <a
                  href="https://github.com/picocss/pico/blob/master/LICENSE.md"
                  class="secondary"
                >
                  MIT
                </a>
              </small>
            </p>
          </footer>
        </div>
      </main>
      {/* End main */}
    </>
  );
}
