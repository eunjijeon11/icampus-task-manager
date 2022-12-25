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
      200: "#FBD38D",
      300: "#F6AD55",
    },
  },
});

export default theme;
