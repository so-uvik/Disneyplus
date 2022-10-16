/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-100': 'repeat(auto-fit, minmax(150px, 1fr))',
    },
    fontFamily:
    {
      body: ["Montserrat", "sans-serif"]
    }
  },
  plugins: [],
}}
