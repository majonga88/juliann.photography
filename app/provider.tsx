"use client"

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, cookieStorageManager, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    body: "'League Spartan', sans-serif",
    heading: "'League Spartan', sans-serif",
    mono: "Menlo, monospace",
  },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme} colorModeManager={cookieStorageManager}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
