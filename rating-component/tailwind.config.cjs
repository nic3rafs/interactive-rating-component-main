/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "hsl(25, 97%, 53%)",
      white: "hsl(0, 0%, 100%)",
      "light-gray": "hsl(217, 12%, 63%)",
      "medium-gray": "hsl(216, 12%, 54%)",
      "medium-gray-transparent": "hsl(216, 12%, 54%, 0.11)",
      "dark-blue": "hsl(213, 19%, 18%)",
      "very-dark-blue": "hsl(216, 12%, 8%)",
    },
    extend: {},
  },
  plugins: [],
};
