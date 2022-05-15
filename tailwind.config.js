module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        "fill-40": "repeat(auto-fill, minmax(5rem, 33%))",
        "capital-fill": "repeat(auto-fit, minmax(5rem, 1fr))",
        "auto-full": "min-content, 1fr",
      },
    },
  },
  plugins: [],
};
