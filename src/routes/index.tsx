import Header from "~/components/Partials/Header";

export default function Home() {
  return (
    <>
      <Header />
      <header class="intro">
        <div class="container">
          <h1>Solid Formly</h1>
          <p>
            A good solution to generate and control a dynamic forms using core
            and custom rules with customize styles.
          </p>
          <p>
            <a
              href="/getting-started"
              role="button"
              class="secondary outline"
              aria-label="Documentation"
            >
              Getting started
            </a>{" "}
            <a
              href="/components/text"
              role="button"
              class="secondary outline"
              aria-label="Download"
            >
              Components
            </a>
          </p>
          <p>
            <code>
              <small>npm install solid-formly</small>
            </code>
          </p>
        </div>
      </header>
      <div class="container">
        <section class="advantage">
          <div class="grid">
            <div class="col">
              <article>
                <i class="fas fa-cogs fa-3x" aria-hidden="true"></i>
                <h4>Generator</h4>
                <p>
                  Using an object list fields with attributes, you can generate
                  automatically a dynamic form with custom rules.
                </p>
              </article>
            </div>
            <div class="col">
              <article>
                <i class="fas fa-palette fa-3x" aria-hidden="true"></i>
                <h4>Styles</h4>
                <p>
                  Full control on style form using classes of diffirent
                  libraries like: bootstrap, tailwindcss ...etc
                </p>
              </article>
            </div>
            <div class="col">
              <article>
                <i class="fas fa-fighter-jet fa-3x" aria-hidden="true"></i>
                <h4>Speed</h4>
                <p>
                  Build fastly a dynamic form with full control of validation
                  and getting easly values with custom messages
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
