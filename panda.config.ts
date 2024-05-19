import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#ff007a" },
          secondary: { value: "#FF6864" },
          accent: { value: "#e2e8f0" },
          "pigmo-primary": { value: "#E90083" },
          "high-contrast": { value: "#E6E3E8" },
          "elevation-1": { value: "#170D19" },
          "elevation-2": { value: "#251929" },
          "elevation-3": { value: "#35243D" },
        },
        spacing: {
          sidebarY: { value: "16px" },
          sidebarX: { value: "32px" },
        },
      },
    },
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
