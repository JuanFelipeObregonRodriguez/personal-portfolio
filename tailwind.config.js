module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Baloo: ['Baloo 2', 'cursive'],
        Readex: ["Readex Pro", "sans-serif"],
        BalooTamma: ["Baloo Tamma 2", "cursive"],
        Roboto: ["Roboto", "sans-serif"],
        Fredoka: ["Fredoka One", "cursive"],
      },
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      }
    },
  },
  plugins: [],
}
