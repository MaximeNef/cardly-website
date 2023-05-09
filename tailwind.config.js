/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: "#1F1F1F",
        lightGrey: "#9C9C9C",
        whiteGrey: "#F3F3F3",
        blackTitle: "#141313",
        blackCards : "#141313",
        backgroundWhite: "#f8f8f8 "
      },

      fontSize: {
        sm: "12px",
        base: "15px",
        subTitle: "20px",
        xl: "25px",
        title: "30px",
      },

      fontFamily: {
        ABeeZeeItalic: "ABeeZee italic",
      },

      boxShadow: {
        apple: "2px 4px 16px rgb(0 0 0 / 12%)",
        btnShadow: "2px 4px 10px 2px red",
      },

      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
