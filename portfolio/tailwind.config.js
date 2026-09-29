export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    fontFamily: { display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'], sans: ['Figtree', 'system-ui', 'sans-serif'] },
    colors: { ink: '#14213D', paper: '#F5F7FA', brand: '#1F4E9E', night: '#0D1420', panel: '#151E2D' }
  } },
  plugins: []
}
