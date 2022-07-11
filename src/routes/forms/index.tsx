import { Component } from "solid-js";
import Form from "~/components/Form";
import LayoutMain from "~/components/Layouts/LayoutMain";
import { IField } from "solid-formly";

import Prism from "prismjs";

const JSCode = `import { Component } from "solid-js";
import { Formly, IField } from "solid-formly";

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

  return (
    <Formly
      form_name={form_name}
      fields={fields}
      onSubmit={onSubmit}
      real={true}
    />
  );
};

export default Index;
`;

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

  return (
    // <LayoutMain>
    //   <article>
    //     <Form fields={fields} />
    //   </article>
    // </LayoutMain>
    <>
      {/* Start nav */}
      <nav class="container-fluid">
        <ul>
          <li>
            <a href="https://picocss.com" aria-label="Back home">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
                height="56px"
              >
                <path
                  fill="currentColor"
                  d="M633.43 429.23c0 118.38-49.76 184.72-138.87 184.72-53 0-92.04-25.37-108.62-67.32h-2.6v203.12H250V249.7h133.67v64.72h2.28c17.24-43.9 55.3-69.92 107-69.92 90.4 0 140.48 66.02 140.48 184.73zm-136.6 0c0-49.76-22.1-81.96-56.9-81.96s-56.9 32.2-57.24 82.28c.33 50.4 22.1 81.63 57.24 81.63 35.12 0 56.9-31.87 56.9-81.95zM682.5 547.5c0-37.32 30.18-67.5 67.5-67.5s67.5 30.18 67.5 67.5S787.32 615 750 615s-67.5-30.18-67.5-67.5z"
                />
              </svg>
            </a>
          </li>
          <li>Documentation</li>
        </ul>
        <ul>
          <li>
            <a href="https://picocss.com#examples" class="secondary">
              Examples
            </a>
          </li>
          <li>
            <a href="./" class="secondary">
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://github.com/picocss/pico"
              class="contrast"
              aria-label="Pico GitHub repository"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                height="16px"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      {/* End nav */}

      {/* Start main */}
      <main class="container" id="docs">
        <aside>
          <nav class="closed-on-mobile">
            <a href="./" class="secondary" id="toggle-docs-navigation">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="expand"
                fill="currentColor"
                viewBox="0 0 16 16"
                height="16px"
              >
                <title>Expand</title>
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="collapse"
                fill="currentColor"
                viewBox="0 0 16 16"
                height="16px"
              >
                <title>Collapse</title>
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"
                ></path>
              </svg>
              Table of content
            </a>
            <details open={true}>
              <summary>Getting started</summary>
              <ul>
                <li>
                  <a
                    href="./"
                    id="start-link"
                    class="secondary"
                    aria-current="page"
                  >
                    Usage
                  </a>
                </li>
                <li>
                  <a href="./themes.html" id="themes-link" class="secondary">
                    Themes
                  </a>
                </li>
                <li>
                  <a
                    href="./customization.html"
                    id="customization-link"
                    class="secondary"
                  >
                    Customization
                  </a>
                </li>
                <li>
                  <a
                    href="./classless.html"
                    id="classless-link"
                    class="secondary"
                  >
                    Class-less version
                  </a>
                </li>
                <li>
                  <a href="./rtl.html" id="rtl-link" class="secondary">
                    RTL
                  </a>
                </li>
              </ul>
            </details>
            <details>
              <summary>Layout</summary>
              <ul>
                <li>
                  <a
                    href="./containers.html"
                    id="containers-link"
                    class="secondary"
                  >
                    Containers
                  </a>
                </li>
                <li>
                  <a href="./grid.html" id="grid-link" class="secondary">
                    Grid
                  </a>
                </li>
                <li>
                  <a
                    href="./scroller.html"
                    id="scroller-link"
                    class="secondary"
                  >
                    Horizontal scroller
                  </a>
                </li>
              </ul>
            </details>
            <details>
              <summary>Elements</summary>
              <ul>
                <li>
                  <a
                    href="./typography.html"
                    id="typography-link"
                    class="secondary"
                  >
                    Typography
                  </a>
                </li>
                <li>
                  <a href="./buttons.html" id="buttons-link" class="secondary">
                    Buttons
                  </a>
                </li>
                <li>
                  <a href="./forms.html" id="forms-link" class="secondary">
                    Forms
                  </a>
                </li>
                <li>
                  <a href="./tables.html" id="tables-link" class="secondary">
                    Tables
                  </a>
                </li>
              </ul>
            </details>
            <details>
              <summary>Components</summary>
              <ul>
                <li>
                  <a
                    href="./accordions.html"
                    id="accordions-link"
                    class="secondary"
                  >
                    Accordions
                  </a>
                </li>
                <li>
                  <a href="./cards.html" id="cards-link" class="secondary">
                    Cards
                  </a>
                </li>
                <li>
                  <a
                    href="./dropdowns.html"
                    id="dropdowns-link"
                    class="secondary"
                  >
                    Dropdowns
                  </a>
                </li>
                <li>
                  <a href="./modal.html" id="modal-link" class="secondary">
                    Modal
                  </a>
                </li>
                <li>
                  <a href="./navs.html" id="navs-link" class="secondary">
                    Navs
                  </a>
                </li>
                <li>
                  <a
                    href="./progress.html"
                    id="progress-link"
                    class="secondary"
                  >
                    Progress
                  </a>
                </li>
              </ul>
            </details>
            <details>
              <summary>Utilities</summary>
              <ul>
                <li>
                  <a href="./loading.html" id="loading-link" class="secondary">
                    Loading
                  </a>
                </li>
                <li>
                  <a
                    href="./tooltips.html"
                    id="tooltips-link"
                    class="secondary"
                  >
                    Tooltips
                  </a>
                </li>
              </ul>
            </details>
            <details>
              <summary>Extend</summary>
              <ul>
                <li>
                  <a
                    href="./we-love-classes.html"
                    id="we-love-classes-link"
                    class="secondary"
                  >
                    We love .classes
                  </a>
                </li>
              </ul>
            </details>
          </nav>
          <script>
            const activeLink = document.querySelector("aside a#start-link"),
            parentAccordion = activeLink.closest("details");
            activeLink.setAttribute("aria-current", "page"),
            parentAccordion.setAttribute("open", "true");
          </script>
        </aside>

        <div role="document">
          <section>
            <h2>Field Text</h2>
            <article>
              <h4>Preview</h4>
              <Form fields={fields} />
              {/* <footer class="code">
                <h4>Code</h4>
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
              </footer> */}
            </article>
            <article>
              <h4>Code</h4>
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
        </div>
      </main>
      {/* End main */}
    </>
  );
};

export default Index;
