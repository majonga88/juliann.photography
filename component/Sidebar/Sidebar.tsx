"use client";

import React, { ReactNode, useEffect } from "react";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { SidebarContent } from "@/component/Sidebar/SidebarContent";
import { MobileNav } from "@/component/Sidebar/MobileNav/MobileNav";
import { ThemeProps } from "@/metadata/ThemeMetadata";

interface LinkProps {
  name: string;
  path: string;
}

export default function Sidebar({
  isGallery,
  links,
  theme,
  children,
}: {
  isGallery?: boolean;
  links?: Array<LinkProps>;
  theme: ThemeProps;
  children: ReactNode;
}) {
  const galleryMode = isGallery || false;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");
  useEffect(() => {
    if (isLargerThanMd) {
      onClose();
    }
  }, [isLargerThanMd, onClose]);

  return (
    <Box minH="100vh" bg={theme.color.background} color={theme.color.font}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", lg: "block" }}
        isGallery={galleryMode}
        theme={theme}
        links={links}
      />
      {!galleryMode && (
        <>
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
          >
            <DrawerContent>
              <SidebarContent
                isGallery={galleryMode}
                onClose={onClose}
                theme={theme}
                links={links}
              />
            </DrawerContent>
          </Drawer>
        </>
      )}
      <MobileNav isGallery={galleryMode} theme={theme} onOpen={onOpen} />
      <Box ml={{ base: 0, lg: 360 }}>{children}</Box>
    </Box>
  );
}
