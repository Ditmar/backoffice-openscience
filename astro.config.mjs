import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svgr from 'vite-plugin-svgr';
// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    plugins: [react(), svgr()],
});
