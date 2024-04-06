/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#002D69",
        footerBg: "#B8E0EF",
        footerText: "#53585F",
        footerBorderTop: "#929FA8",
        logoColor: "#0D5EBA",
      },
      fontFamily: {
        landingPageFont: ['Nunito Sans']
      }
    },
  },
  plugins: [],
};
