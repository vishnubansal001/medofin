// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,htm}",
  ],
  theme: {
   screens:{
      'xs': '375px',
      's' : '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
   },
    extend: {
      backgroundImage: {
        'product': "url('/src/assets/products.png')",
      },
      fontFamily: {
        popp: ["Poppins", "sans-serif"],
        mons: ["Montserrat", "sans-serif"],
        lime: ["LimeLight", "cursive"],
        Inter: ['Inter', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}