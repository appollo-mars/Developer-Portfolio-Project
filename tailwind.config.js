/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '25': '6.25rem', // custom value
      },
      spacing: {
        '20': '5rem', // custom value
        '25': '6.25rem', // custom value
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '32px'],
        '2xl': ['24px', '36px'],
        '3xl': ['30px', '42px'],
        '4xl': ['36px', '48px'],
        '5xl': ['48px', '56px'],
        '6xl': ['64px', '72px'],
      },
      colors: {
        'primary': '#1a202c',
        'secondary': '#e2e8f0',
        'tertiary': '#f7fafc',
        'accent': '#ed64a6',
      },
    },
  },
  variants: {},
  plugins: [],
  utilities: {
    '.px-25': {
      'padding-left': '25px',
      'padding-right': '25px',
    },
    '.p-35': {
      'padding': '8.75rem',
    },
    '.m-25': {
      'margin': '6.25rem',
    },
    '.mt-20': {
      'margin-top': '5rem',
    },
  },
}


