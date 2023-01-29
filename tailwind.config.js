/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "inner-background": "#D3D3D3",
        "dark-blue": "#0C2340",
        background: "#E1E1E1",
        selected: "#FFC72C",
        "light-gray": "#AEAEAE",
        "dark-gray": "#BEBEBE",
        "darker-gray": "#B5B4B4",
        "user-card-yellow": "#FFD04A",
        "success-green": "#2FA156",
        "unsuccessful-red": "#E93434",
        "course-group-blue": "#0D2441",
      },
    },
  },
  plugins: [],
};
