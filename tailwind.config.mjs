/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#13111C',
        'bg-secondary': '#1C1929',
        fg: '#EFEAFF',
        muted: '#A095BD',
        accent: '#FF5C8A',
        accent2: '#D43A6B',
        border: '#2A263A',
        hover: '#1F1C2C',
      },
      fontFamily: {
        heading: ["'Black Han Sans', sans-serif", 'system-ui', 'sans-serif'],
        body: ["'Pretendard', sans-serif", 'system-ui', 'sans-serif'],
        mono: ['ui-monospace, monospace', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        wide: '1100px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#EFEAFF',
            '--tw-prose-headings': '#EFEAFF',
            '--tw-prose-links': '#FF5C8A',
            '--tw-prose-bold': '#FF5C8A',
            '--tw-prose-quotes': '#A095BD',
            '--tw-prose-quote-borders': '#FF5C8A',
            '--tw-prose-code': '#FF5C8A',
            '--tw-prose-borders': '#2A263A',
            maxWidth: '720px',
            fontSize: '1.05rem',
            lineHeight: '1.85',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
            h2: {
              borderBottom: '1px solid #2A263A',
              paddingBottom: '0.5rem',
              marginTop: '3rem',
            },
            blockquote: {
              background: '#1F1C2C',
              borderRadius: '0 8px 8px 0',
              padding: '0.8rem 1.2rem',
              fontStyle: 'italic',
            },
            img: {
              borderRadius: '12px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
              margin: '2rem auto',
            },
            code: {
              background: '#1F1C2C',
              padding: '0.15rem 0.45rem',
              borderRadius: '4px',
              border: '1px solid #2A263A',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
