const flowbite = require('flowbite-react/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js", 
    flowbite.content()
  ],
  plugins: [
    // ...
    flowbite.plugin(),
    require('flowbite/plugin')
  ],
}
