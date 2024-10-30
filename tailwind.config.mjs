/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                primary: ["EB Garamond", "serif"], // Definer primær skrifttype
                secondary: ["Campton", "sans-serif"], // Definer sekundær skrifttype
              },
              fontWeight: {
                bold: "700", // Definer bold vægt
                "semi-bold": "600", // Definer semi-bold vægt
                light: "300", // Definer light vægt
              },
              fontSize: {
                // Desktop størrelser
                "h1-d": "80px",
                "h2-d": "56px",
                "h3-d": "36px",
                "body-b": "24px",
                "body-s": "18px",
    
              },
              colors: {
                white: "#ffffff",
                black: "#000000",
                "dark-graphite": "#1C1E23",
                "plastic-red": "#FF1054",
                "green": "#007C79",
                "beige": "#E9E2DC",
              },
            },
            keyframes: {
              'slide-in1': {
                '0%': { transform: 'translateY(-100px)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
              },
              'slide-in2': {
                '0%': { transform: 'translateY(-200px)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
              },
              'slide-in3': {
                '0%': { transform: 'translateY(300px)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
              },
              'slide-in4': {
                '0%': { transform: 'translateY(100px)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
              },
              'slide-in5': {
                '0%': { transform: 'translateY(200px)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
              },
              'slide-right1': {
                '0%': { transform: 'translateX(300px)', opacity: '0' },
                '100%': { transform: 'translateX(0)', opacity: '1' },
              },
              'slide-right2': {
                '0%': { transform: 'translateX(400px)', opacity: '0' },
                '100%': { transform: 'translateX(0)', opacity: '1' },
              },
              'slide-left1': {
                '0%': { transform: 'translateX(-200px)', opacity: '0' },
                '100%': { transform: 'translateX(0)', opacity: '1' },
              },
              'slide-left2': {
                '0%': { transform: 'translateX(-400px)', opacity: '0' },
                '100%': { transform: 'translateX(0)', opacity: '1' },
              },
              'float-horizontal': {
              '0%, 100%': { transform: 'translateX(-10px)' }, // Starting and ending point
              '50%': { transform: 'translateX(20px)' },    // Move 20px to the right
             },

            },
            animation: {
              'slide-in1': 'slide-in1 3s ease-out forwards', // Animation duration and easing
              'slide-in2': 'slide-in2 5s ease-out forwards', // Animation duration and easing
              'slide-in3': 'slide-in3 6s ease-out forwards', // Animation duration and easing
              'slide-in4': 'slide-in4 3s ease-out forwards', // Animation duration and easing
              'slide-in5': 'slide-in5 4.5s ease-out forwards', // Animation duration and easing
              'slide-right1': 'slide-right1 3.5s ease-out forwards', // Animation duration and easing
              'slide-right2': 'slide-right1 6s ease-out forwards', // Animation duration and easing
              'slide-left1': 'slide-left1 3s ease-out forwards', // Animation duration and easing
              'slide-left2': 'slide-left1 6s ease-out forwards', // Animation duration and easing
              'float-horizontal': 'float-horizontal 2s ease-in-out infinite', // Duration and loop
            },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
