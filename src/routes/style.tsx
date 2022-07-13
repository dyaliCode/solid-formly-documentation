import Code from "~/components/Doc/Code";
import Aside from "~/components/Partials/Aside";
import Header from "~/components/Partials/header";

const code_boostrap = `const fields: IField[] = [
  {
    type: "input",
    name: "email",
    attributes: {
      type: "email",
      id: "email",
      classes: ["form-control"], // classes name for bootstrap
      placeholder: "Tap your email"
    },
    rules: ["required", "email"],
    messages: {
      required: "Custom message for required rule!"
    }
  },
  {
    type: "select",
    name: "name-field-select",
    attributes: {
      id: "id-field-select",
      classes: ["form-control"], // classes name for bootstrap
      label: "Label field select"
    },
    extra: {
      options: [
        {
          value: 1,
          title: "option 1"
        },
        {
          value: 2,
          title: "option 2"
        }
      ]
    }
  },
  {
    type: "radio",
    name: "name-field-radio",
    attributes: {
      id: "id-field-radio",
      classes: ["form-check-input"] // classes name for bootstrap
    },
    extra: {
      items: [
        {
          id: "radio1",
          value: 1,
          title: "radio 1"
        },
        {
          id: "radio2",
          value: 2,
          title: "radio 2"
        }
      ],
      aligne: "default"
    }
  }
]`;

const code_tailwind = `const fields: IField[] = [
  {
    type: "input",
    name: "email",
    attributes: {
      type: "email",
      id: "email",
      classes: ["input px-4 py-3 rounded-full"], // classes name for bootstrap
      placeholder: "Tap your email"
    },
    rules: ["required", "email"],
    messages: {
      required: "Custom message for required rule!"
    }
  },
  {
    type: "select",
    name: "name-field-select",
    attributes: {
      id: "id-field-select",
      classes: ["input px-4 py-3 rounded-full"], // classes name for tailwindcss
      label: "Label field select"
    },
    extra: {
      options: [
        {
          value: 1,
          title: "option 1"
        },
        {
          value: 2,
          title: "option 2"
        }
      ]
    }
  },
  {
    type: "radio",
    name: "name-field-radio",
    attributes: {
      id: "id-field-radio",
      classes: ["rounded text-pink-500"] // classes name for tailwindcss
    },
    extra: {
      items: [
        {
          id: "radio1",
          value: 1,
          title: "radio 1"
        },
        {
          id: "radio2",
          value: 2,
          title: "radio 2"
        }
      ],
      aligne: "default"
    }
  }
]`;

export default function Style() {
  return (
    <>
      <Header />
      {/* Start main */}
      <main class="container" id="docs">
        <Aside />

        <div role="document">
          <section>
            <hgroup>
              <h1>Style</h1>
              <h2>
                <u>Solid Formly</u> is not depent to specifie atomic CSS, so you
                can integrate any libraries.
              </h2>
            </hgroup>
          </section>

          <section>
            <article>
              <header>Boostrap</header>
              <Code code={code_boostrap} />
            </article>
            <article>
              <header>Tailwind</header>
              <Code code={code_tailwind} />
            </article>
          </section>
        </div>
      </main>
      {/* End main */}
    </>
  );
}
