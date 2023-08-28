/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bungee_inline: ['Bungee Inline'],
        bungee: ['Bungee'],
        rust_g: ['IntroRustG-Base2Line']
      },
      boxShadow: {
        'boxProduct': '0 1px 10px 1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require("daisyui")
  ],
}