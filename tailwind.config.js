module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          DEFAULT: '#53c9f6',
          dark: '#1689b6',
          light: '#2db3e6',
        },
        'brand-gray': {
          DEFAULT: '#6d6d6d',
          dark: '#404040',
          light: '#8c8c8c',
          extralight: '#f6f6f6'
        }
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}