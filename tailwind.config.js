/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'poppins':['Poppins', 'sans-serif'],
      'paprika':['Paprika', 'sans-serif']
    },
    screens: {
      'sm': '600px',
      'md': '740px',
      'lg': '1024px'
    },
    
    extend: {},
  },
  plugins: [],
}

/**
 * sm -> mobile -> till 340
 * md -> tablet -> till 800
 * lg -> laptop -> till 1024
 * xl -> desktop -> till 1280
 */