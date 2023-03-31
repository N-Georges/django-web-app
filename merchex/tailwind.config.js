/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./listings/templates/**/*.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
