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
      fontFamily: {
        display: ['"Newsreader Variable"', "Newsreader", "Georgia", "serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      // Semantic tokens defined in globals.css, exposed to utilities so
      // components can say `text-ink-soft` / `border-rule` instead of guessing.
      colors: {
        paper: "var(--paper)",
        raised: "var(--raised)",
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
        },
        muted: "var(--muted)",
        rule: {
          DEFAULT: "var(--rule)",
          faint: "var(--rule-faint)",
        },
        teal: {
          DEFAULT: "var(--teal)",
          soft: "var(--teal-soft)",
        },
      },
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
    // Point HeroUI's own semantics at the same palette so Button, Chip, Card,
    // and Modal come out on-brand instead of default blue.
    heroui({
      themes: {
        light: {
          colors: {
            background: "#f6f8f7",
            foreground: "#151a1c",
            primary: {
              50: "#eef5f3",
              100: "#e4efec",
              200: "#c3ded8",
              300: "#8cc0b7",
              400: "#3f8f84",
              500: "#0f6b63",
              600: "#0d5a53",
              700: "#0a4741",
              800: "#073430",
              900: "#04211f",
              DEFAULT: "#0f6b63",
              foreground: "#ffffff",
            },
            focus: "#0f6b63",
          },
        },
        dark: {
          colors: {
            background: "#0e1213",
            foreground: "#e8efec",
            primary: {
              50: "#0b1918",
              100: "#16211f",
              200: "#1d332f",
              300: "#2c5049",
              400: "#3f7d72",
              500: "#5ec6b4",
              600: "#7ed3c4",
              700: "#a0e0d5",
              800: "#c3ede6",
              900: "#e3f7f3",
              DEFAULT: "#5ec6b4",
              foreground: "#0e1213",
            },
            focus: "#5ec6b4",
          },
        },
      },
    }),
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
