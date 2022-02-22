module.exports = {
  content: ['./src/components**/*.{html,js,,jsx}'],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#F1E04B',
        'secondary': '#EEEFEF',
        'text': '#050606',
      },
    },
  },
  plugins: [],
};