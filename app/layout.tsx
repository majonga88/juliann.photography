"use client"

import { League_Spartan } from 'next/font/google'
import { ColorModeScript } from "@chakra-ui/react"
import Provider from "./provider"
import SimpleSidebar from '@/components/sidebar'

const inter = League_Spartan({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="en" data-theme="light">
        <head />
        <body className={inter.className}>
          <ColorModeScript type="cookie" nonce="testing" />
          <Provider><SimpleSidebar>{children}</SimpleSidebar></Provider>
        </body>
      </html>
  )
}
