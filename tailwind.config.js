module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
      },
      screens: {
        'mobile': '375px',
        // => @media (min-width: 375px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        gray: {
          900: "#0F1112",
          800: "#151718",
          700: "#181A1E",
          400: "#55565C",
        },
        "darkgray": "#a9a9a9",
        indigo: {
          400: "#927CFF",
          700: "#4D3E97",
        },
        green: {
          400: "#01F0C8",
          700: "#009C80",
        },
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
