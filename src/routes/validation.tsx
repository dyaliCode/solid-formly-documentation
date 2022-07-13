import Code from "~/components/Doc/Code";
import Aside from "~/components/Partials/Aside";
import Header from "~/components/Partials/header";

const code_core_rules = `const fields = [{
  ...,
  rules: [
    'required',
    'min:number',
    'max:number',
    'between:number:number',
    'equal:number',
    'email',
    'url'
    'file'
  ]
}];`;

const code_custom_rules = `import { IField, getValues } from "solid-formly";

async function notEqual(): boolean {
  const values = await getValues(form_name);
  if (values.firstname === values.lastname) {
    return false;
  }
  return true;
}

async function customRule2(): boolean {
  const values = await getValues(form_name);
  ....
}

const fields: IField[] = [
  {
    type: "input",
    name: "firstname",
    attributes: {
      id: "firstname"
    },
  },
  {
    type: "input",
    name: "lastname",
    attributes: {
      id: "lastname"
    },
    rules: [notEqual, customRule2],
    messages: {
      // Custom message error
      // property name must equal to function name.
      notEqual: "Last name must not equal to First name",
      customRule2: "foo bar"
    }
  }
];
`;

const code_file_rules = `const fields: IField[] = [{
  type: "file",
  name: "name-file",
  attributes: {
    id: "id-field",
    classes: ["form-control"],
    label: "Image"
  },
  extra: {
    showPreview: true,
    multiple: true
  },
  rules: ["file"],
  file: {
    types: "jpg,gif,png", // extensions
    maxsize: 5 // 5MB
  }
}];`;

export default function Advance() {
  return (
    <>
      <Header />
      {/* Start main */}
      <main class="container" id="docs">
        <Aside />

        <div role="document">
          <section>
            <hgroup>
              <h1>Validation</h1>
              <h2>
                <u>Solid Formly</u> give you a core rules or customize your own
                for validation a form 💯.
              </h2>
            </hgroup>
          </section>

          <section>
            <article>
              <header>Core rules</header>
              <Code code={code_core_rules} />
            </article>
            <article>
              <header>Custom rules</header>
              <Code code={code_custom_rules} />
            </article>
            <article>
              <header>Field file rules</header>
              <p>
                <i>
                  In case you need to use file rules, must to add a file
                  attribute to object's field with list rules, ex:
                </i>
              </p>
              <Code code={code_file_rules} />
            </article>
          </section>
        </div>
      </main>
      {/* End main */}
    </>
  );
}
