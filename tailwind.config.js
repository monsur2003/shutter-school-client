/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   daisyui: {
      themes: [
         {
            mytheme: {
               primary: "#829bd6",

               secondary: "#fc94ab",

               accent: "#b770d8",

               neutral: "#202b32",

               "base-100": "#f6eef7",

               info: "#768bf4",

               success: "#2dd2a9",

               warning: "#faba19",

               error: "#fa3347",
            },
         },
      ],
   },
   plugins: [require("daisyui")],
   daisyui: {
      themes: ["light", "dark"],
   },
};
