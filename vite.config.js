import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  base: "/ar.js-aframe/",
  server: { https: true },
  plugins: [basicSsl()],
});
