import { heroui } from "@heroui/theme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        ticker: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(-48rem, 0, 0)",
          },
        },
      },

      animation: {
        "fade-in": "fade-in .6s ease-out forwards",
        "fade-in-up": "fade-in-up .75s ease-out forwards",
        "fade-in-left": "fade-in-left .75s ease-out forwards",
        "scale-in": "scale-in .6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        ticker: "ticker 12s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          delay: (value) => {
            return {
              "transition-delay": value,
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        },
      );
    }),
  ],
};
