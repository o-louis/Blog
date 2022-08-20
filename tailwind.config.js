module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0e17',
        headline: '#fffffe',
        paragraph: '#a7a9be',
        button: '#ff8906',
        buttonText: '#fffffe',
        stroke: 'black',
        main: '#fffffe',
        highlight: '#ff8906',
        secondary: '#f25f4c',
        tertiary: '#e53170',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};