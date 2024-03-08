/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'paleOrange': '#E4C799',
        'mainOrange': '#EF9F20',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

