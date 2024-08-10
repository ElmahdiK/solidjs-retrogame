import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [solidPlugin()],
  base: '/solidjs-retrogame/',
  server: {
    port: 3000,
  },
  // build: {
  //   target: 'esnext',
  // },
});