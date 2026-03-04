/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        mercedes: {
          silver: '#A6A6A6',
          charcoal: '#1F1F1F',
          blue: '#00ADEF'
        }
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["corporate", "business"],
  },
}