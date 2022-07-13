import Aside from "~/components/Partials/Aside";
import Header from "~/components/Partials/header";
import Usage from "~/components/Doc/Usage";

export default function Home() {
  return (
    <>
      <Header />
      {/* Start main */}
      <main class="container" id="docs">
        <Aside />

        <div role="document">
          <section>
            <hgroup>
              <h1>Getting started</h1>
              <h2>
                With <u>Solid Formly</u> you can generate a dynamic forms with
                custom rules and styles for application's{" "}
                <a href="#">solidjs</a> & <a href="#">solid-start</a> 🙂.
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
          </section>

          <section>
            <h3>Installation</h3>
            <p>
              <code>
                npm install <i>solid-formly</i>
              </code>
            </p>
          </section>

          <Usage />
        </div>
      </main>
      {/* End main */}
    </>
  );
}
