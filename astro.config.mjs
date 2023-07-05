import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  outDir: './docs',
  site: 'https://jcarvajal1987.github.io',
  base:'/apr',
  build: {
    format: 'file',
    assets: 'assests',
    assetsPrefix: '.'
  }
});