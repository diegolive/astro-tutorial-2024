import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://diegolive-astro-tutorial-2024.netlify.app/",
  integrations: [preact()]
});