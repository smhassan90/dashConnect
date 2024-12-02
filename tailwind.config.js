// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     "./src/**/*.{js,jsx,ts,tsx}",
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }

// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//            'custom-gray':'#EDEDED94'
//       },
//       screens: {
//         // Custom breakpoint from 375px to 600px
//         'mobile': { 'min': '375px', 'max': '600px' },
//       },
//     },
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// }
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
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#EDEDED94",
      },
      screens: {
        // Custom breakpoint from 375px to 600px
        mobile: { min: "375px", max: "600px" },
      },
      fontWeight: {
        medium: "500",
        normal: "400",
      },
      fontSize: {
        "custom-16": ["16px", "24px"],
        "custom-18": ["16px", "22px"],
        "custom-20": ["20px", "30px"],
      },
      spacing: {
        "m-top": "31px", 
      },
      borderRadius:{
        '10' : '10px'
      }
    },
  },
  plugins: [require("daisyui"), require("autoprefixer")],
};