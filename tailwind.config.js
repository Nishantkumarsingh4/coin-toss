/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: { extend: { boxShadow: { 'soft': '0 10px 30px rgba(0,0,0,0.06)' } } },
  plugins: [],
}