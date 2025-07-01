import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "mplus-1p-regular", "sans-serif"],
      },
      // fontWeight: {
      //   bold: "300",
      // },
    },
  },
  plugins: [],
};

export default config;
