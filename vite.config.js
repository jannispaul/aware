// vite.config.js
import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  server: {
    host: "localhost",
    port: 5173,
    cors: "*",
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
  },
  preview: {
    port: 5173,
  },
  plugins: [process.env.NODE_ENV === "development" ? [basicSsl()] : []],
  // plugins: [basicSsl()], // Only use for preview
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
        baseAnimations: "js/baseAnimations.js",
        gift: "js/gift.js",
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
