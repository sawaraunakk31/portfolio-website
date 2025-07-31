/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all components for class usage
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        unbounded: ['"Unbounded"', "cursive"],
        orbitron: ['"Orbitron"', "sans-serif"],
      },
      scrollSnapType: {
        x: 'x mandatory',
      },
      scrollSnapAlign: {
        start: 'start',
      },
      colors: {
        primary: "#0ff",
        neonBlue: "#38bdf8",
        neonPink: "#ec4899",
        deepDark: "#0a0a0a",
      },
      animation: {
        blob: "blob 7s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        'spin-fast': 'spin 1.2s linear infinite',
        fade: "fadeIn 3s ease-in-out",
        'slide-in': 'slideIn 0.5s ease-out',
      },

      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
      },
      boxShadow: {
        neon: "0 0 10px #0ff, 0 0 20px #0ff",
        glow: "0 0 15px #38bdf8, 0 0 30px #38bdf8",
      },
      backgroundImage: {
        radial: "radial-gradient(circle at center, #0f0f0f, #000000)",
        neonGrid: "repeating-linear-gradient(0deg, #0ff 0px, #0ff 1px, transparent 1px, transparent 20px)",
      },
      scale: {
        102: "1.02",
        103: "1.03",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
