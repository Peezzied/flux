/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: '#0174BE',
        secondary: '',
        ascent: '#FFC436',
        text: '#FFFFFF'
      },
      fontFamily: {
        title: 'Poppins',
        label: 'IBM Plex Mono',
        primary: 'Montserrat'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}