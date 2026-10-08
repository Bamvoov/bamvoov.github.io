/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      colors: {
        'bg-1': 'var(--bg-1)',
        'bg-2': 'var(--bg-2)',
        'bg-3': 'var(--bg-3)',
        'accent': 'var(--accent)',
        'accent-secondary': 'var(--accent-secondary)',
        'muted': 'var(--muted)',
        'text-color': 'var(--text)',
        'contact-bg': 'var(--contact-bg)',
        'contact-text': 'var(--contact-text)',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Instrument Serif"', 'serif'],
      },
      spacing: {
        '9': '2.25rem',
        '13': '3.25rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};