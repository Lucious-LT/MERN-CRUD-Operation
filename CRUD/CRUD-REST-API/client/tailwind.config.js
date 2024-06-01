/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      button: {
        primary: {
          backgroundColor: 'blue',
          color: 'green',
          // Add more properties as needed
        },
      },
    },
  },
  plugins: [],
};