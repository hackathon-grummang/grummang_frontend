// tailwind.config.js
module.exports = {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF9A00', // Custom orange color
          '50': '#FFF3E0',
          '100': '#FFE0B2',
          '200': '#FFCC80',
          '300': '#FFB74D',
          '400': '#FFA726',
          '500': '#FF9A00', // Default orange
          '600': '#FB8C00',
          '700': '#F57C00',
          '800': '#EF6C00',
          '900': '#E65100',
        },
      },
      fontFamily: {

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}