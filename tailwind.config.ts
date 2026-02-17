import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        evryn: {
          teal: "#6DBAC4",
          "teal-dark": "#5AABB8",
          "teal-light": "#8FCDD5",
        },
      },
      fontFamily: {
        sans: ["Karla", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
