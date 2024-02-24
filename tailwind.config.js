/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
  "node_modules/flowbite-react/lib/esm/**/*.js",
  "./index.html",   
  "./client/**/*.{html,js,jsx,ts,tsx}",
  "./client/src/**/*.{html,js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js",
  "./client/node_modules/flowbite-react/lib/esm/**/*.js",],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

