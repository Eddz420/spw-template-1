/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#2563eb',
          secondary: '#4f46e5',
          accent: '#8b5cf6',
          background: '#f8fafc',
          text: '#1e293b',
          surface: '#ffffff'
        },
        dark: {
          primary: '#60a5fa',
          secondary: '#818cf8',
          accent: '#a78bfa',
          background: '#0f172a',
          text: '#e2e8f0',
          surface: '#1e293b'
        }
      }
    }
  },
  plugins: [],
}