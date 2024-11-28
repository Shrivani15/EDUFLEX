/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif","Pacifico"],
        Lacquer: ["Lacquer","serif"],
      },
      colors: {
        primary: "#22177A",
        secondary: "#69a79c",
        light: "#f7f7f7",
        dark: "#333333",
        dark2: "#8EA3A6",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
