/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        VeryDarkGray: "hsl(0, 0%, 17%)",
        DarkGray: "hsl(0, 0%, 59%)",
      },
      backgroundImage: {
<<<<<<< HEAD
        pattern: "url('/public/pattern-bg.png')",
=======
        pattern: "url('dist/src/images/pattern-bg.png')",
>>>>>>> 39e9f85a86b5007042e595d3716b8315f71c7234
      },
    },
  },
  plugins: [],
};
