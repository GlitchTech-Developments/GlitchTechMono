/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mokoto_glitch: ["mokoto-glitch"],
        mokoto_glitch_mk1: ["mokoto-glitch-mk1"],
        mokoto_glitch_mk2: ["mokoto-glitch-mk2"],
        mokoto_glitch_outline: ["mokoto-glitch-outline"],
      },
      colors: {
        transparent: "transparent",
        translucent: "rgba(0, 0, 0, 0.5)",
        glitchtech: "#00B619",
        glitchtech_alt: "#e73c7e",
      },
    },
  },
  plugins: [require("daisyui")],
};
