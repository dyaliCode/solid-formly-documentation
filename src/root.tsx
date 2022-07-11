// @refresh reload
import { Links, Meta, Routes, Scripts } from "solid-start/root";
import { ErrorBoundary } from "solid-start/error-boundary";
import { createEffect, Suspense } from "solid-js";

import "@picocss/pico/css/pico.css";
import "@picocss/pico/docs/css/pico.docs.css";
import "prismjs/themes/prism-solarizedlight.css";
import "./index.css";

export default function Root() {
  createEffect(() => {
    // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //   document.documentElement.setAttribute("data-theme", "dark");
    // } else {
    //   document.documentElement.setAttribute("data-theme", "light");
    // }
  });
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
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
