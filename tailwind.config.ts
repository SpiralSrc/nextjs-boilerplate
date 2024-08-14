import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "350px",
        xs: "480px",
        sm: "640px",
        md: "840px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1620px",
        "4xl": "1920px",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sacramento: ["var(--font-sacramento)"],
        roboto: ["var(--font-roboto)"],
      },
      boxShadow: {
        "inset-shadow": "inset 0 -3em 3em rgb(0 200 0 / 30%)",
        "primary-color-sm":
          "1px 2px 2px 1px rgba(238, 139, 172, 0.5)",
        "primary-color-md":
          "1px 3px 4px 1px rgba(238, 139, 172, 0.5)",
      },
      colors: {
        primary: "rgb(218, 87, 150)",
        secondary: "antiquewhite",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
