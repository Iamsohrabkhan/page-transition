/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        main: "var(--main)",
        white: "var(--white)",
        black: "var(--black)",
      },
    },
  },
  plugins: [],
};
