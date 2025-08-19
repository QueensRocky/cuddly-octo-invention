import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'neutral-light': 'var(--color-neutral-light)',
        'neutral-dark': 'var(--color-neutral-dark)',
        accent: {
          a: 'var(--color-accent-a)',
          b: 'var(--color-accent-b)'
        },
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)'
      },
      fontFamily: {
        heading: ['Fraunces','serif'],
        body: ['Inter','ui-sans-serif','system-ui'],
        code: ['JetBrains Mono','monospace']
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0,0,0,0.05)',
        sm: '0 1px 3px rgba(0,0,0,0.08),0 1px 2px rgba(0,0,0,0.04)',
        md: '0 2px 6px rgba(0,0,0,0.08),0 4px 12px rgba(0,0,0,0.06)',
        lg: '0 4px 12px rgba(0,0,0,0.08),0 8px 20px rgba(0,0,0,0.08)',
        xl: '0 8px 24px rgba(0,0,0,0.12)'
      },
      borderRadius: {
        sm: '3px', md: '6px', lg: '12px', xl: '18px', '2xl': '28px'
      }
    }
  },
  plugins: []
};
export default config;
