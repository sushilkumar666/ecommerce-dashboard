import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class", // Dark mode support
    content: ["./src/**/*.{ts,tsx}"], // Scan TypeScript & React files
    theme: {
        extend: {
            colors: {
                primary: "#1c64f2",
                secondary: "#7e3af2",
            },
        },
    },
    plugins: [],
};

export default config;
