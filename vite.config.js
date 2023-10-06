// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "localhost",
    cors: "*",
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
  },
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        index: "js/index.js",
        labs: "js/labs.js",
        whatsIncluded: "js/whatsIncluded.js",
        aboutUs: "js/aboutUs.js",
        awareForBusiness: "js/awareForBusiness.js",
        howItWorks: "js/howItWorks.js",
      },
      output: {
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
