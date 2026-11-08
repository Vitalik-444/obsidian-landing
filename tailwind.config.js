/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        lime: 'var(--lime)',
        lime2: 'var(--lime2)',
        tx: 'var(--tx)',
        mu: 'var(--mu)',
        sf: 'var(--sf)',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        black: ['"Archivo Black"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
