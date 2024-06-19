import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        video_height: "394px",
        aprenda_height: "485px",
      },
      colors: {
        video_background_color: "#3E3E45",
        video_controller_color: "#19191C",
        aprenda_a_programmer: "#202024",
        aprenda_text_color: "#9CA3AF",
        pink_color: "#E11D48",
      },
      width: {
        video_controller_width: "753px",
        aprenda_width: "438px",
        video_width: "800px",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
