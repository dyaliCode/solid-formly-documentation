import Prism from "prismjs";
import Aside from "~/components/Partials/Aside";
import Header from "~/components/Partials/header";

const JSCode = `import { render } from 'solid-js/web';

function HelloWorld() {
  return <div class="container">Hello World!</div>;
}

render(() => <HelloWorld />, document.getElementById('app'))
`;

export default function Home() {
  return (
    <>
      <Header />
      {/* Start main */}
      <main class="container" id="docs">
        <Aside />

        <div role="document">
          <section>
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
          </section>

          <section id="start">
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
          </section>
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
