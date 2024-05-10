import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'green-300': ' #00B37E',
                'green-500': '#00875F',
                'green-700': '#015F43',

                'gray-50': '#E6E6EA',
                'gray-100': '#E4E4E8',
                'gray-200': '#E1E1E6',
                'gray-300': '#C4C4CC',
                'gray-400': '#7C7C8A',
                'gray-500': '#323238',
                'gray-600': '#29292E',
                'gray-700': '#202024',
                'gray-800': '#121214',
                'gray-900': '#101012',
                'gray-950': '#0F0F10',
            },
        },
    },
    plugins: [],
}

export default config
