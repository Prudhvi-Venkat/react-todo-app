module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: { pale: "#00d8ff" },
  },
  plugins: [require("flowbite/plugin")],
};
