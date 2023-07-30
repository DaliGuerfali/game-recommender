/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d1d5db",

          secondary: "#6b7280",

          accent: "#2563eb",

          neutral: "#2a323c",

          "base-100": "#1d232a",

          info: "#dbeafe",

          success: "#6ee7b7",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  plugins: [daisyui],
};
