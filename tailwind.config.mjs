import typography from "@tailwindcss/typography";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: { extend: { fontFamily: { display: ["Fraunces", "serif"], sans: ["Outfit", "sans-serif"] } } },
  plugins: [typography],
};
