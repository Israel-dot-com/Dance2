/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      s: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        purple: '#55549D',
        white: '#C0BFC4',
        gray: '#778EA8',
        ash: '#3F4851',
        lightgray: 'rgba(192, 191, 196, 0.25)',
        darktest: 'rgba(22, 22, 23, 0.64)',
      }
    },
  },
  plugins: [],
}
