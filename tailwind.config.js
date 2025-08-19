/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6f61',
        secondary: '#ffd166',
        accent: '#06d6a0',
        background: '#fff8f0',
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(90deg, #ff6f61 0%, #ffd166 100%)',
      },
    },
  },
  plugins: [],
}
