/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B0F19",
          card: "#0F172A",
          accent: "#06B6D4", // Neon Cyan
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          border: "#1E293B",
          borderHover: "#334155"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "Fira Code", "monospace"]
      }
    },
  },
  plugins: [],
}

