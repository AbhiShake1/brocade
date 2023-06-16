import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'play': ['Play', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
