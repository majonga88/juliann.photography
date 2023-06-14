"use client";

import { ColorModeScript } from "@chakra-ui/react";
import Provider from "./provider";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ColorModeScript type="cookie" nonce="testing" />
        <Provider>{children}</Provider>
        <Analytics />
      </body>
    </html>
  );
}
