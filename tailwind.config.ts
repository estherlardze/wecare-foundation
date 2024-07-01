import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero4.jpg')",
        hero2: "url('/bg.jpg')",
        contact: "url('/contact.jpg')",
        love: "url('/love.png')",
        about: "url('/about-us_03.png')"
      },
    },
  },
  plugins: [],
};
export default config;
