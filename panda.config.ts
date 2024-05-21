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

  // Global vars
  globalVars: {
    "--mouse-position-x": "50%",
    "--mouse-position-y": "50%",
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fontSizes: {
          h1: { value: "var(--font-sizes-5xl)" },
          h2: { value: "var(--font-sizes-3xl)" },
          h3: { value: "var(--font-sizes-2xl)" },
          h4: { value: "var(--font-sizes-xl)" },
          h5: { value: "var(--font-sizes-lg)" },
          h6: { value: "var(--font-sizes-md)" },
          hero: { value: "var(--font-sizes-xl)" },
        },

        colors: {
          primary: { value: "#E90083" },
          secondary: { value: "#FF6864" },
          accent: { value: "#e2e8f0" },
          success: { value: "#24D861" },
          error: { value: "#DE3449" },
          "discord-1": { value: "#E90083" },
          "discord-2": { value: "#FF6864" },
          "telegram-1": { value: "#34BDC6" },
          "telegram-2": { value: "#299CDC" },
          "x-1": { value: "#0D0B0C" },
          "x-2": { value: "#1C1717" },
          "pigmo-primary": { value: "#E90083" },
          "high-contrast": { value: "#E6E3E8" },
          "low-contrast": { value: "#826B8E" },
          "elevation-1": { value: "#170D19" },
          "elevation-2": { value: "#251929" },
          "elevation-3": { value: "#35243D" },
          "elevation-4": { value: "#4B3456" },
        },

        gradients: {
          button: {
            value: {
              type: "radial",
              placement: "52.11% 100% at 52.11% 0%",
              stops: ["#FF6864 0%", "#E90083 100%"],
            },
            description: "Main Button gradient, only used for buttons",
          },
          footer: {
            value: "linear-gradient(270deg, #120B14 0%, #1E1221 100%)",
          },
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
