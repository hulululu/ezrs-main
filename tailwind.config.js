/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0A0A0A',
                surface: '#121212',
                primary: '#00A3E0',
                secondary: '#6C757D',
                accent: '#20C20E',
                'planet-blue': '#0099D8',
            },
            fontFamily: {
                sans: ['Inter', 'Roboto', 'sans-serif'],
                display: ['Orbitron', 'sans-serif'],
            },
            animation: {
                'scan': 'scan 3s linear infinite',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
            },
            keyframes: {
                scan: {
                    '0%': { transform: 'translateY(0%)' },
                    '100%': { transform: 'translateY(400px)' }, // Approximating height
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
