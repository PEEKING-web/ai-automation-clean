/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // iconic n8n style
        primary: '#FF6D5A',   // Hot Pink/Coral
        secondary: '#7D4CDB', // Deep Purple
        accent: '#00D1FF',    // Cyan for "AI pulse" effects
        dark: {
          900: '#0A0A0B',     
          800: '#161618',     
          700: '#232326',     // For card borders
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 109, 90, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 109, 90, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'n8n': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'n8n-hover': '0 20px 40px -10px rgba(255, 109, 90, 0.15)', // Added a primary-tinted glow
        'glass': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
}