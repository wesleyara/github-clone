module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    display: ["Poppins", "system-ui", "sans-serif"],
    body: ["Poppins", "system-ui", "sans-serif"],
    extend: {
      colors: {
        brand: {
          black: "var(--black-color)",
        },
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          xl: "0rem",
        },
      },
    },
  },
  plugins: [],
};
