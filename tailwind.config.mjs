import typography from "@tailwindcss/typography";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bodoni Moda", "Times New Roman", "serif"],
        sans: ["Figtree", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#141210",
        paper: "#e9e7e2",
        oxblood: { DEFAULT: "#6b2d3c", soft: "#8a4558" },
      },
    },
  },
  plugins: [typography],
};
