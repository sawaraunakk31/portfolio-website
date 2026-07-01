/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit Variable"', '"Outfit"', "sans-serif"],
        display: ['"Sora Variable"', '"Sora"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        signature: ['"Kaushan Script"', "cursive"],
      },
      colors: {
        obsidian: "#070707",
        carbon: "#101010",
        pearl: "#f8f5ef",
        gold: "#d4af37",
        goldSoft: "#f2d486",
      },
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "float-reverse": "floatReverse 9s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      boxShadow: {
        "panel-glow": "0 22px 50px rgba(8, 145, 178, 0.25)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
