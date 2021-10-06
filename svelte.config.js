/** @type {import('@sveltejs/kit').Config} */
import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";

const config = {
  extensions: [".svelte", ".md", ".svelte.md"],
  preprocess: [
    preprocess({
      scss: {
        prependData: "@import 'src/lib/styles/variables.scss';",
      },
    }),
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: adapter(),
  },
};

export default config;
