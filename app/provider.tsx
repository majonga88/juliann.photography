"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  Box,
  ChakraProvider,
  cookieStorageManager,
  extendTheme,
} from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const theme = extendTheme({
  fonts: {
    body: "'League Spartan', sans-serif",
    heading: "'League Spartan', sans-serif",
    mono: "Menlo, monospace",
  },
});

const globalStyles = css({
  "*": {
    userSelect: "none"
  }
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const handleRightClick = (event: any) => {
    event.preventDefault();
};

  return (
    <CacheProvider>
      <ChakraProvider theme={theme} colorModeManager={cookieStorageManager}>
        <Global styles={globalStyles} />
        <Box onContextMenu={handleRightClick}>
          {children}
        </Box>
      </ChakraProvider>
    </CacheProvider>
  );
}
