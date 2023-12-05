import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				text: "var(--text)",
				background: "var(--background)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
			},
			maxWidth: {
				"2xs": "16rem",
				xs: "20rem",
			},
			
		},
	},
	plugins: [require("@tailwindcss/container-queries")],
};
export default config;
