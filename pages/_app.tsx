import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "../styles/globals.scss";
import "../styles/styles.scss"; // temp, components should have their own scss

const theme = extendTheme({
  // change heading fonts:

  fonts: {
    heading: "Scrapbook",
    body: "'Be Vietnam Pro'",
  },
  colors: {
    darkgray: {
      50: "#5F5E62",
      100: "#5F5E62",
      500: "#5F5E62",
    },
    customteal: {
      50: "#20FFF2",
      100: "#20FFF2",
      500: "#20FFF2",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
