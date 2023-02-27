// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'heading font', "CWDangamAsac-Bold"`,
    body: `'body font', "Pretendard-Regular"`,
    text: `'text font', "Pretendard-Regular"`,
  },

  colors: {
    brand: {
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
    },
    task: {
      lesson: "#F6AD55",
      task: "#90CDF4",
      meet: "#FEB2B2",
      work: "#9AE6B4",
      etc: "#A0AEC0",
    },
  },
});

export default theme;
