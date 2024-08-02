/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [require('daisyui')],
}
