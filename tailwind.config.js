/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#398799",
      secondary: "#49B6CE",
      "grayish-blue": "#9EC2CA",
      "gray-100": "#f3f4f6",
      gray: "#c4a8ff",
      white: "#fff",
    },
  },
  plugins: [],
};
