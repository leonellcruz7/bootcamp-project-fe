/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      red: "#E72E23",
      primary50: "#EEF2FF",
      primary100: "#E0E7FF",
      primary200: "#C7D2FE",
      primary300: "#A5B4FC",
      primary400: "#818CF8",
      primary500: "#6366F1",
      primary600: "#4F46E5",
      primary700: "#4338CA",
      primary800: "#3730A3",
      neutral100: "#ECF1F3",
      neutral200: "#D2D2D3",
      neutral300: "#A5A5A7",
      neutral400: "#77787B",
      neutral500: "#4A4B4F",
      neutral600: "#1D1E23",
      neutral700: "#17181C",
      neutral800: "#111215",
    },
    fontSize: {
      h1: ["3.052rem", { fontWeight: "700" }],
      h2: ["1.953rem", { fontWeight: "700" }],
      h3: ["1.563rem", { fontWeight: "700" }],
      h4: ["1.25rem", { fontWeight: "700" }],
      h5: ["1rem", { fontWeight: "700" }],
      h6: [".8rem", { fontWeight: "700" }],
      xs: ".8rem",
      sm: "1rem",
      md: "1.25rem",
      lg: "1.563rem",
    },
    fontWeight: {
      bold: 700,
      semibold: 600,
      medium: 500,
      normal: 400,
      light: 300,
    },
    boxShadow: {
      primary: "0px 4px 16px rgba(0, 0, 0, 0.16)",
    },
    backgroundImage: {
      mg: "url('/src/assets/images/MGBackground.svg')",
    },
  },
  plugins: [],
};
