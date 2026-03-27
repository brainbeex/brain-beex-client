import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1F44",
        amber: "#FFB800",
        cyanAccent: "#00E5FF",
        bgWhite: "#FFFFFF",
        bgOffWhite: "#F8F9FA",
        textMain: "#4B5563",
        borderGray: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
      },
    },
  },
  plugins: [daisyui],
};