import Aside from "~/components/Partials/Aside";
import Header from "~/components/Partials/header";
import Alter from "~/components/Doc/Advance/Alter/index";
import Preprocess from "~/components/Doc/Advance/Preprocess";

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
              <h1>Advance</h1>
              <h2>
                <i>
                  You can easly get a form more reactive using hook preprocess.
                </i>
              </h2>
            </hgroup>
          </section>

          <Alter />
          <Preprocess />
        </div>
      </main>
      {/* End main */}
    </>
  );
}
