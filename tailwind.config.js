/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          0: "#F3F4FA",
          1: "#787979",
          2: "rgba(3, 6, 32, 0.65)",
          3: "rgba(3, 6, 32, 0.45)",
          4: "#9A9A9A",
          5: "rgba(3, 6, 32, 0.25)",
          6: "rgba(3, 6, 32, 0.04)",
          7: "rgba(3, 6, 32, 0.1)",
        },
        black: {
          1: "#1E1F20",
          2: "rgba(3, 6, 32, 0.88)",
          3: "#464646",
        },
        green: {
          1: "#32915A",
          2: "#EEFFF5",
        },
        red: {
          1: "#B43E50",
          2: "#FFF1F0",
        },
        blue: {
          1: "#2F54EB",
          2: "#F0F5FF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        "4xl": [
          "0 9px 28px 8px rgba(0, 0, 0, 0.05)",
          "0 -3px 6px -4px rgba(0, 0, 0, 0.12)",
          "0 -6px 16px 0px rgba(0, 0, 0, 0.08)",
        ],
      },
    },
  },
  plugins: [],
};
