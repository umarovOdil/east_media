import type { Config } from 'tailwindcss'

export default <Config>{
    content: [
        './app/**/*.{vue,js,ts,jsx,tsx}',
        // fallback if structure changes
        './components/**/*.{vue,js,ts,jsx,tsx}',
        './layouts/**/*.{vue,js,ts,jsx,tsx}',
        './pages/**/*.{vue,js,ts,jsx,tsx}',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0079ff',
                    50: '#eef8ff',
                    100: '#d9edff',
                    200: '#bcdfff',
                    300: '#8ecaff',
                    400: '#59adff',
                    500: '#2e8aff',
                    600: '#0079ff',
                    700: '#0062df',
                    800: '#004fb3',
                    900: '#06428c',
                },
                dark: {
                    bg: '#0d1117',
                    surface: '#161b22',
                    text: '#f0f6fc',
                },
                light: {
                    bg: '#ffffff',
                    surface: '#f8fafc',
                    text: '#0f172a',
                }
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
                display: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
