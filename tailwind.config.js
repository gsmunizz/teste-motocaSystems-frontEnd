/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple-bg': '#2A233C',
      'purple-liht': '#312D4B',
      'purple-lihtest': '#8C57FF',
      'pink': '#ff49db',
      'red': '#FF4C51',
      'red-bg': '#55304C',
      'green': '#56CA00',
      'green-bg': '#354546',
      'yellow': '#FFB400',
      'yellow-bg': '#544146',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#CAC9CD',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
