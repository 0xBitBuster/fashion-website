/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
        "./components/**/*.{js,ts,jsx,tsx,mdx}", 
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                'dark-green': '#14262A',
                'light-green': '#5C6B6C',
                'creme': '#EADFCE',
                'light-creme': '#DDDBD1',
                'yellow-creme': '#FEE485'
            },
            fontFamily: {
                'viaoda': 'var(--font-viaoda)',
                'cairo': 'var(--font-cairo)'
            },
            fill: {
                'light-creme': '#DDDBD1'
            }
        },
    },
    plugins: [],
};
