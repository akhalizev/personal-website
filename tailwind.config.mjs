/** @type {import('tailwindcss').Config} */
export default {
  // Enable class-based dark mode so we can toggle via documentElement.classList
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'macos-gray': {
          50: '#f9f9f9',
          100: '#f5f5f5',
          200: '#e8e8e8',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        'macos-blue': {
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#007AFF',
          600: '#0056CC',
          800: '#003D82'
        },
        'macos-red': {
          500: '#FF3B30',
          600: '#D70015'
        },
        'macos-green': {
          400: '#4CAF50',
          500: '#34C759',
          600: '#248A3D',
          800: '#1B5E20'
        },
        'macos-yellow': {
          500: '#FFCC00',
          600: '#FF9500'
        },
        'macos-orange': {
          400: '#FF9800',
          500: '#FF8C00',
          600: '#FF6F00',
          700: '#E65100'
        }
      },
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'system-ui', 'sans-serif'],
        'sf-mono': ['SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'monospace'],
      },
      backdropBlur: {
        'macos': '20px',
      },
      borderRadius: {
        'macos': '12px',
        'macos-lg': '16px',
      },
      boxShadow: {
        'macos': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'macos-lg': '0 8px 32px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
