/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rajdhani", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#0d1117',
        },
        // Force light mode colors
        light: {
          primary: '#ffffff',
          secondary: '#f9fafb',
          tertiary: '#f3f4f6',
          accent: '#000000',
        }
      },
      boxShadow: {
        card: '0 8px 24px rgba(16,24,40,.06)'
      },
      borderRadius: {
        xl: '1.25rem',
      }
    },
  },
  // Use media query for dark mode detection
  darkMode: 'media',
  plugins: [
    require('@tailwindcss/forms')
  ],
}


