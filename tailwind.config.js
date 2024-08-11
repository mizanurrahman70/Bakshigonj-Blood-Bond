/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
      myTheme:{
        Primary_Color:'#00796B',
        Secondary_Color:'#F5F5F5',
        Accent:'#303F9F'

      }
      },
      "light", "dark"
    ],
  },
}

