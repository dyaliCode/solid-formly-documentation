// @refresh reload
import { Links, Meta, Routes, Scripts } from "solid-start/root";
import { ErrorBoundary } from "solid-start/error-boundary";
import { Suspense } from "solid-js";
import createThemeMode from "~/utils/stores";

import "@picocss/pico/scss/pico.scss";
import "@picocss/pico/docs/scss/pico.docs.scss";
import "prismjs/themes/prism-solarizedlight.css";
import "./index.scss";

export default function Root() {
  const { mode } = createThemeMode;

  return (
    <html lang="en" data-theme={mode()}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />

        <meta property="og:title" content="Solid Formly" />
        <meta property="og:type" content="documentation" />
        <meta
          property="og:url"
          content="https://solid-formly-documentation.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://assets.solidjs.com/banner?project=Formly&type=package"
        />

        <Links />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <body class="antialiased">
        <ErrorBoundary>
          <Suspense>
            <Routes />
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  );
}
