"use client";

import { ColorModeScript } from "@chakra-ui/react";
import Provider from "./provider";
import { Analytics } from "@vercel/analytics/react";
import { SharedStateProvider } from "@/component/sharedStateProvider";

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
        <Provider>
          <SharedStateProvider>
            {children}
          </SharedStateProvider>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
