import Code from "~/components/Doc/Code";
import Aside from "~/components/Partials/Aside";
import Header from "~/components/Partials/header";

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
                <u>Solid Formly</u>.
              </h2>
            </hgroup>
          </section>
        </div>
      </main>
      {/* End main */}
    </>
  );
}
