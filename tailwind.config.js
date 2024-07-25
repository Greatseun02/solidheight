/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1c8a99",
        black:"#030f0f",
        link:"#1c2627",
        bgLight:"#ecf6f7"
      },
      padding:{
        sm:"15px",
        xl:"60px"
      }
    },
  },
  plugins: [],
}

