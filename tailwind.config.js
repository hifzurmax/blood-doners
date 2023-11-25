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
        'main': '#FF4147',
        'second': '#495057',
        'third': '#F8F9FA',
        'forth': '#EAEDF1',
      }
    }
  },
  plugins: [require("daisyui")],
}

