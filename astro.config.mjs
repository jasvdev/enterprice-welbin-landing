// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://jasvdev.github.io',
  base: 'enterprice-welbin-landing',
  integrations: [tailwind()],
});
