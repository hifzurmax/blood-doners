/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      colors: {
        'main': '#181738',
        'second': '#FF3C40',
        'third': '#F2F3F7',
        'forth': '#EAEDF1',
      }
    }
  },
  plugins: [require("daisyui")],
}

