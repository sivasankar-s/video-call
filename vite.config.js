import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
// import nodePolyfills from 'rollup-plugin-polyfill-node';
// import nodePolyfills from 'rollup-plugin-node-polyfills';
// import inject from '@rollup/plugin-inject';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // define: {
  //   global: {},
    
  // },
})
