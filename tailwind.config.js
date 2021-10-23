// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  // more options here
  theme: {
    extend: {
      colors: {
        "black":"#18191F",
        "gray-dark": "#635f69",
        "gray":"#a8a5ab",
        "gray-light":"#C5C3C7",
        "blue":"#4687c7",
        "blue-dark":"#317AC1",
        "blue-light":"#6fa2d4",
        "pink":"#F9968B",
        "pink-dark":"#e0877d",
        "pink-light":"#fbb6ae"
      },
    },
    fontFamily: {
      Roboto: "'Roboto', sans-serif"
    },
    container: {
      center: true,
    },
    variants: {
      extend: {
        lineClamp: ['hover']
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}