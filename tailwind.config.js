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
        secondary: '#dcdbe1',
        ascent: '#FFC436',
        text: '#FFFFFF',
        dark: '#17171b'
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