import { withAccountKitUi, createColorSet } from "@account-kit/react/tailwind";

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const svgToDataUri = require("mini-svg-data-uri");

/** @type {import('tailwindcss').Config} */
export default withAccountKitUi({
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      width: {
        "navbar-width": "calc(100vw - 40px)",
        "navbar-width-md": "calc(100vw - 80px)",
        "navbar-width-xl": "calc(100vw - 240px)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at center, hsl(var(--primary)), rgba(0, 0, 0, 0) 70%)",
        "pricing-card-gradient":
          "radial-gradient(ellipse at center, rgba(160, 224, 13, 1) 80%, rgba(160, 224, 13, 0) 100%)",
      },
      animation: {
        scrollX:
          "scrollX var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        scrollY:
          "scrollY var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scrollX: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        scrollY: {
          to: {
            transform: "translateY(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="84" height="84" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
},{
      // override account kit themes
      colors: {
        // "btn-primary": createColorSet("#A0E00D", "#A0E00D"),
        // "fg-accent-brand": createColorSet("#A0E00D", "#A0E00D"),
        // "btn-secondary": createColorSet("#1C1F1D", "#1C1F1D"),
        // "bg-surface-default": createColorSet("#1C1F1D", "#020617"),
        // "bg-surface-subtle": createColorSet("#2A2D2B", "#2A2D2B"),
        // active: createColorSet("#A0E00D", "#A0E00D"),
      },
      borderRadius: "sm",
  
});

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
