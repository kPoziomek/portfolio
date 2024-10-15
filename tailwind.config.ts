import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      "h1-mobile": "32px",
      "h1-tablet": "48px",
      "h1-desktop": "57px",
      "h2-mobile": "28px",
      "h2-tablet": "32px",
      "h2-desktop": "38px",
      "h3-mobile": "20px",
      "h3-tablet": "24px",
      "h3-desktop": "28px",
      h5: "14px",
      "p-mobile": "16px",
      "p-desktop": "20px",
    },
    screens: {
      xs: "375px", // breakpoint dla telefonu
      sm: "576px", // breakpoint dla telefonu
      md: "768px", // breakpoint dla tabletu
      lgTablet: "1024px", // breakpoint dla tabletu
      lg: "1200px", // breakpoint dla desktopu
    },
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #F5F7FF, #99A98F)",
        "card-gradient": "radial-gradient(circle, #FCEBEF, #F4EDFF)",
        "testimonial-gradient": "linear-gradient(180deg, #fffdfd, #F6EACB)",
        "new-gradient": "linear-gradient(180deg, #fffdfd,#D1E9F6)",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        PrimaryBackgroundColor: "#D1E9F6",
        SecondaryBackgroundColor: "#FAF3E4",
        ThirdBackgroundColor: "#FFF8DE",
        TextPrimary: "#0B0B0B",
        TextSecondary: "#505050",
        BackgroundGradient: "#F5F7FF",
        HighlightDark: "#140533",
        HighlightLight1: "#EECAD5",
        HighlightLight2: "#F6EACB",
        customColor: "rgb(246, 234, 203,0.5)",
        customHover: "#d6f2fb",
        custom: {
          base: "#F5F7FF",
          "lighter-1": "#F8FAFF",
          "lighter-2": "#FBFCFF",
          "lighter-3": "#FFFFFF",
          "darker-1": "#E0E4F5",
          "darker-2": "#CCD2EB",
          "darker-3": "#B8C0E0",
          "saturated-1": "#E6EBFF",
          "saturated-2": "#D6E0FF",
          "saturated-3": "#C7D5FF",
          "desaturated-1": "#F2F3F9",
          "desaturated-2": "#EEEEF3",
          "desaturated-3": "#E9EAEE",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
