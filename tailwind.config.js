/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#F37021',
          'orange-hover': '#DD5F13',
          'orange-light': '#FFF7ED',
          'orange-subtle': '#FFEDD5',
          blue: '#008AD2',
          'blue-dark': '#006FA8',
          'blue-light': '#E0F2FE',
          navy: '#070E1A',
          teal: '#2DD4BF',
        },
        navy: {
          950: '#040914',
          900: '#070E1A',
          850: '#0B1324',
          800: '#0F1A2E',
          700: '#162542',
        },
      },
      boxShadow: {
        'card-dark': '0 20px 45px -15px rgba(4, 9, 20, 0.35)',
        'btn-orange': '0 8px 20px -4px rgba(243, 112, 33, 0.4)',
        'btn-blue': '0 8px 20px -4px rgba(0, 138, 210, 0.35)',
      },
    },
  },
  plugins: [],
}
