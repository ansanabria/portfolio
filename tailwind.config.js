/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#1E293B",
        twitter: "#1DA1F2",
        hashnode: "#2962FF",
        linkedin: "#0077B5",
      },
    },
  },
  plugins: [],
}
