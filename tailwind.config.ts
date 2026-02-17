import type { Config } from "tailwindcss";

const white = "#FAFDFF";
const black = "#212529";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // text colors
        primary: "#FAFDFF",
        subheading: "#C0C0C8",
        dark: "#0d0d0e",
        muted: "#999999",
        danger: "#EE626C",
        //stats text
        "stats-text": white,
        "stats-subheading": white,
        // main background
        "background-dark": "#121212",
        // navbar
        "background-navbar": "#1E1E1F",
        "navbar-text-hover": "rgb(37 99 235)",
        "background-navbar-button-hover": "#0369a1",
        // pricing table
        "background-recommended-sticker": "rgb(37 99 235)",
        "border-table-recommended": "rgb(94, 94, 96)",
        "background-pricing-card-recommended": "#212123",
        "background-pricing-card": "#1E1E1F",
        "background-pricing-card-button": "#007BFF",
        "background-pricing-card-button-hover": "#E4A11B",
        "border-pricing-card": "rgb(33,33,35)",
        "border-table-list": "rgb(51, 51, 55)",
        "red-check": "#EE626C",
        "red-check-background": "#4D2F33",
        "blue-check": "#3785DA",
        "blue-check-background": "#1D3045",
        "orange-check": "#EDA841",
        "orange-check-background": "#443520",
        // calendly
        "background-calendly": "#E4A11B",
        "background-calendly-hover": "#E9B348",
        "calendly-text": "#0d0d0e",
        // checkout button
        "background-checkout": "#E4A11B",
        "background-checkout-hover": "#E9B348",
        // chatform
        "background-chatform-header": "#007BFF",
        "background-chatform": "#FAFAFA",
        "background-chatform-button": "#007BFF",
        "background-chatform-userchat": "#007BFF",
        "background-chatform-botchat": "#E5E7EB",
        "background-chatform-button-hover": "#0775EA",
        "border-chatform-input": "#007BFF",
        // coming soon sticker
        "background-coming-soon": "#1E1E1F",
        // the process (development page)
        "background-process": "#E4A11B",
        // cards (services, confirmation)
        "background-card": "#1E1E1F",
        // confirmation
        "background-innerCard": "#343435",
        // perks
        "background-icon-product": "rgb(37 99 235)",
        // footer
        "custom-link-footer": "whitesmoke",
        "custom-link-footer-hover": "#6c757d",
        "background-subscribe-muted": "#6c757d",
        /* book-a-call */
        "background-book-a-call": "#E4A11B",
        "background-book-a-call-hover": "#E9B348",
        "book-a-call-text": black,
        "book-a-call-text-hover": black,
        "book-a-call-slider": white,
        "book-a-call-slider-hover": white,
      },
      screens: {
        xs: "479px",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 45s linear infinite",
        "bounce-3x": "bounce-3x 4s ease-in-out infinite",
        "reverse-infinite-scroll":
          "reverse-infinite-scroll 45s linear infinite",
      },

      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "reverse-infinite-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "bounce-3x": {
          "0%, 100%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(-25%)" },
          "20%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-25%)" },
          "40%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
          "60%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      margin: {
        "ml-calc": "calc(50% - 50vw)",
      },
    },
  },
  // variants: {
  //   scrollbar: ["rounded"], // Ensure you have the scrollbar variant available
  // },
  // plugins: [
  //   require("tailwind-scrollbar")({ nocompatible: true }), // Add this line if using a scrollbar plugin
  // ],
};

export default config;
