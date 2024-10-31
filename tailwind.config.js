// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
           'custom-gray':'#EDEDED94'
      },
      screens: {
        // Custom breakpoint from 375px to 600px
        'mobile': { 'min': '375px', 'max': '600px' },
      },
    },
  },
  plugins: [],
}
