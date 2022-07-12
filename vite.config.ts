import { defineConfig } from "vite";
import solid from "solid-start";
// import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import vercel from "solid-start-vercel";

export default defineConfig({
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        remarkPlugins: [remarkGfm],
      }),
      enforce: "pre",
    },
    solid({
      extensions: [".mdx", ".md"],
      adapter: vercel(),
    }),
    // solid(),
  ],
  ssr: {
    noExternal: ["solid-formly"],
  },
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
