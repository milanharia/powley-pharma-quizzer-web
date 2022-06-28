import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("white", "dark")(props),
      color: mode("dark", "white")(props),
    },
  }),
};

const colors = {
  primary: "#7579E7",
  secondary: "#9AB3F5",
  dark: "#261C2C",
  white: "#ffffff",
  light: "#B9FFFC",
  medium: { light: "#B9FFFC", dark: "#271925" },
  answerButton: { default: "#E2E2E5", light: "#E6E6E6" },
};

const fonts = {
  body: "system-ui, sans-serif",
  heading: "Poppins, sans-serif",
  mono: "Menlo, monospace",
};
const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
  title: "80px",
};

const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  fontSizes,
});

export default theme;
