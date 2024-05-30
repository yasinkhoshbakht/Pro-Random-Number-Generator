/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        neonGreen: "#39ff14",
        neonBlue: "#00f7ff",
        neonPink: "#ff00e6",
      },
      boxShadow: {
        neonGreen: "0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14",
        neonBlue: "0 0 5px #00f7ff, 0 0 10px #00f7ff, 0 0 20px #00f7ff",
        neonPink: "0 0 5px #ff00e6, 0 0 10px #ff00e6, 0 0 20px #ff00e6",
      },
      fontFamily: {
        RobotoMono: ["Roboto Mono"],
        BungeeSpice: ["Bungee Spice"],
      },
    },
  },
  plugins: [],
};
