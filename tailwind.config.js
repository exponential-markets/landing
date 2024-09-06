/** @type {import('tailwindcss').Config} */
export default {
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
        urbanist: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        "wave-background": "url('/src/assets/Wave background.png')",
        "noise-background": "url('/src/assets/noisebackground.png')",
        "angular-gradient-1":
          "conic-gradient(from 180deg at 50% 50%, rgba(217, 217, 217, 0.2) -30.91deg, #393939 28.87deg, #070707 97.79deg, #171717 182.64deg, #8D8D8D 260.16deg, rgba(221, 222, 222, 0.3) 307.42deg, rgba(217, 217, 217, 0.2) 329.09deg, #393939 388.87deg)",
        "angular-gradient-2":
          "conic-gradient(from 53.09deg at 50% 50%, #000000 0deg, #ABABAB 23.17deg, #818181 72deg, #3F3F3F 180deg, #000000 360deg)",
        "angular-gradient-3":
          "conic-gradient(from 53.09deg at 50% 50%, #000000 -51.12deg, rgba(229, 228, 226, 0.5) 69.48deg, #848884 143.28deg, #71797E 215.28deg, #000000 308.88deg, rgba(229, 228, 226, 0.5) 429.48deg)",
        "card-gradient":
          "linear-gradient(354.6deg, rgba(29, 29, 29, 0.6) 10.25%, rgba(0, 0, 0, 0.6) 33.18%, rgba(0, 0, 0, 0.6) 68.59%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
