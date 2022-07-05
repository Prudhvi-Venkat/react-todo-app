module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      aqua: {
        DEFAULT: "#00D8FF",
        50: "#B8F4FF",
        100: "#A3F1FF",
        200: "#7AEBFF",
        300: "#52E4FF",
        400: "#29DEFF",
        500: "#00D8FF",
        600: "#00A8C7",
        700: "#00798F",
        800: "#004957",
        900: "#001A1F",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
