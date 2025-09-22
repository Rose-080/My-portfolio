/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        beige: "#fdf6ec",       // soft beige background
        rose: "#f8c8dc",        // baby pink
        sunshine: "#fff7ae",    // baby yellow
        charcoal: "#2e2e2e",    // dark gray text
        cocoa: "#5a3e36"        // warm brown accent
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        fadeUp: "fadeUp 1s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        gradient: "gradientMove 6s ease infinite"
      }
    }
  },
  plugins: []
};
