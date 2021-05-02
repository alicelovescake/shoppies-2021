module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-green": "#008060",
        "brand-green-dark": "#012e26",
        "brand-green-light": "#95bf46",
        "brand-off-white": "#faf7ed",
      },
    },
  },
  variants: {
    extend: {
      cursor: ["hover"],
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
