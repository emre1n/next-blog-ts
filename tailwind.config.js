/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#641ae6',
      secondary: '#d926a9',
      accent: '#1fb2a6',
      'negative-text': '#a5adba',
      neutral: '#2a323c',
      'base-100': '#1d232a',
      info: '#3abff8',
      success: '#36d399',
      warning: '#fbbd23',
      error: '#f87272',
    },
    extend: {
      backgroundColor: {
        neutral: '#2a323c',
      },

      textColor: {
        primary: '#a5adba',
      },
    },
  },
  plugins: [],
};
