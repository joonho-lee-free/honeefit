
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        jiggle: {
          '0%, 100%': { transform: 'scale(1.05) rotate(0deg)' },
          '25%': { transform: 'scale(1.05) rotate(1deg)' },
          '50%': { transform: 'scale(1.05) rotate(-1deg)' },
          '75%': { transform: 'scale(1.05) rotate(1deg)' },
        }
      },
      animation: {
        jiggle: 'jiggle 0.3s ease-in-out'
      }
    }
  },
  plugins: []
}
