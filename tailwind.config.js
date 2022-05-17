module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: 'black',
        light: 'white',
        darkBG: 'black',
        lightBG: 'white',
      },
    },
  },
  plugins: [],
}
