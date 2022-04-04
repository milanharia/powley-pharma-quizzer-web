import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default MyApp;
