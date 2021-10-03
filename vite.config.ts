import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'; // allows us to use the same baseUrl specified in tsconfig.json
import svgr from 'vite-plugin-svgr'; // allows us to use SVG images as React component imports

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  envDir: '../',
  build: {
    minify: true,
    sourcemap: false,
    // rollupOptions: {
    //   external: ['react'],
    //   output: {
    //     globals: {
    //       react: 'React',
    //     },
    //   },
    // },
  },
  server: {
    port: 8080,
  },
});
