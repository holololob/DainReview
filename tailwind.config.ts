import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/***/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          // text-gray-0
          0: '#FFFFFF',
          5: '#F0F1F2',
          10: '#E1E1E3',
          20: '#C4C5CA',
          30: '#A9ABB1',
          40: '#8E8F98',
          60: '#5D5F67',
          70: '#494A51',
          80: '#303136',
          90: '#19191B'
        },
        line: {
          neutral: '#ECEDEE',
          normal: '#D4D5D8'
        },
        status: {
          positive: '#00BF63',
          destructive: '#FC5454'
        },
        background: {
          red: '#FFECEE',
          gray: '#F7F8F8'
        },
        blue: {
          5: '#D4EAFA',
          50: '#0081E5'
        },
        red: {
          5: '#FFE5E8',
          30: '#FF6676',
          main: '#FF394E',
          50: '#D32C3E'
        }
      },
      fontSize: {
        'display-1': ['48px', '140%'], // Display 1
        'display-2': ['32px', '120%'], // Display 2
        'heading-1': ['26px', '120%'], // Heading 1
        'heading-2': ['24px', '120%'], // Heading 2
        'heading-3': ['22px', '120%'], // Heading 3
        'heading-4': ['20px', '140%'], // Heading 4
        'heading-5': ['18px', '140%'], // Heading 5
        'body-1': ['16px', '140%'], // Body 1
        'body-2': ['14px', '140%'], // Body 2
        'caption-1': ['12px', '140%'], // Caption 1
        'caption-2': ['11px', '140%'], // Caption 2
        'caption-3': ['10px', '140%'] // Caption 3
      },
      boxShadow: {
        fotter: 'rgba(100, 100, 100, 0.4) 0px 7px 29px 0px',
        topCustom: '0 -4px 8px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        desktop: '1440px',
        '520': '520px'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
export default config
