"use client"

import './globals.css'
import { League_Spartan } from 'next/font/google'
import { ColorModeScript } from "@chakra-ui/react"
import Provider from "./provider"
import StyledComponentsRegistry from '@/lib/registry'

const inter = League_Spartan({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="en" data-theme="light">
        <head />
        <body>
        <StyledComponentsRegistry>
          <ColorModeScript type="cookie" nonce="testing" />
          <Provider>{children}</Provider>
          </StyledComponentsRegistry>
        </body>
      </html>
  )
}
