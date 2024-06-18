import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height:{
        video_height:"394px",
        aprenda_height:"447px"
      },
      colors:{
        video_background_color:'#3E3E45',
        video_controller_color:"#19191C",
        aprenda_a_programmer:"#202024",
        aprenda_text_color:"#9CA3AF"
      },
      width:{
        video_controller_width:"753px",
        aprenda_width:"438px",
      },
    },
  },
  plugins: [],
};
export default config;
