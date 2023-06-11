import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      primary: {
        "deep-blue": "#1E3A8A",
        "royal-purple": "#5C3D99",
      },
      complimentary: {
        "light-gray": "#CCCCCC",
        "light-blue": "#00A8E8",
        "lavender": "#B57EDC",
      },
      background: {
        "dark-blue": "#152A3A",
      },
      secondary: "green",
    },
    height: {
      "navbar": "3.5rem",
      "fit": "fit-content",
      "vfull": "100vh",
    },
    fontWeights: {
      "semibold": "600",
    },
    lineHeight: {
      "navbar": "3.3rem",
    },
    fontFamily: {
      "lato": "Lato, sans-serif",
    },
    width: {
      "vhalf": "50vw",
      "vfull": "100vw",
      "sidebar": "30vw",
    },
  },
} as Options;
