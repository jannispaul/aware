// vite.config.js
import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  server: {
    host: "localhost",
    cors: "*",
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
  },
  plugins: [process.env.NODE_ENV === "development" ? [basicSsl()] : []],
  build: {
    rollupOptions: {
      // preserveEntrySignatures: "exports-only",
      input: {
        home: "js/home.js",
        locations: "js/locations.js",
        whatsIncluded: "js/whatsIncluded.js",
        aboutUs: "js/aboutUs.js",
        awareForBusiness: "js/awareForBusiness.js",
        howItWorks: "js/howItWorks.js",
        // nav: "js/nav.js",
        // onAllPages: "js/utils/onAllPages.js", // Not sure if this is necessary
      },
      output: {
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
