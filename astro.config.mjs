import { defineConfig } from 'astro/config';
// eslint-disable-next-line import/no-extraneous-dependencies
import node from '@astrojs/node';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server',
  integrations: [react()],
  adapter: node({
    mode: 'http',
  }),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
});
