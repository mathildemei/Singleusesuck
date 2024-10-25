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
                "h1-d": "120px",
                "h2-d": "44px",
                "h3-d": "34px",
                "h4-d": "28px",
    
              },
              colors: {
                white: "#ffffff",
                black: "#000000",
                "dark-graphite": "#1C1E23",
                "plastic-red": "#FF1054",
                "green": "#007C79",
              },
            },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
