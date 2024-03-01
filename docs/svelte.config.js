import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter({
      pages: "dist",
      fallback: "404.html",
    }),
    prerender: {
      // handleMissingId: "ignore",
      handleHttpError: ({ path, referrer, message }) => {
        // TODO Why it's like this?
        // ignore deliberate link to shiny 404 page
        if (path === "/.https://github.com/jycouet/remult-kit") {
          return;
        }

        // otherwise fail the build
        throw new Error(message);
      },
    },
  },
};

export default config;
