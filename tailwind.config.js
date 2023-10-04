/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      main: "#a57676",
      second: "#fffaf5",
      white: "#ffffff",
      black: "#000000",
      gray: "#333333",
    },
    fontFamily: {
      main: ["GyeonggiBatang", "normal"],
      bold: ["GyeonggiBatang", "bold"],
    },
    fontSize: {
      txl: "20px",
      xl: "18px",
      la: "16px",
      m: "14px",
      no: "12px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
