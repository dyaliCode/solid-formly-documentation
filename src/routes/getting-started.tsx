import Usage from "~/components/Doc/Usage";
import LayoutMain from "~/components/Layouts/LayoutMain";

export default function GuideStarted() {
  return (
    <LayoutMain>
      <section>
        <hgroup>
          <h1>Getting started</h1>
          <h2>
            <i>
              With <u>Solid Formly</u> you can generate a dynamic forms with
              custom rules and styles for application's <a href="#">solidjs</a>{" "}
              & <a href="#">solid-start</a> 🙂.
            </i>
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
    </LayoutMain>
  );
}
