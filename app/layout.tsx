"use client"

import './globals.css'
import { League_Spartan } from 'next/font/google'
import { ColorModeScript } from "@chakra-ui/react"
import Provider from "./provider"

const inter = League_Spartan({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <head />
      <body>
        <ColorModeScript type="cookie" nonce="testing" />
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
