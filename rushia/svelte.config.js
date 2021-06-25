import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessor
  preprocess: preprocess(),
  //   preprocess: [scss()],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    files: {
      assets: "static",
      hooks: "src/hooks",
      lib: "src/Components",
      routes: "src/routes",
      serviceWorker: "src/service-worker",
      template: "src/app.html",
    },
  },
};

export default config;
