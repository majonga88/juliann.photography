"use client"

import React, { ReactNode, useEffect } from 'react'
import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/react";
import { SidebarContent } from '@/component/Sidebar/SideContent';
import { MobileNav } from '@/component/Sidebar/MobileNav/MobileNav';
import { ThemeProps } from '@/metadata/ThemeMetadata';

interface LinkProps {
  name: string;
  path: string;
}

export default function Sidebar({ isLight, links, theme, children }: { isLight?: boolean, links?: Array<LinkProps>, theme: ThemeProps, children: ReactNode }) {
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!isLight) {
    const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");
    useEffect(() => {
      if (isLargerThanMd) {
        onClose();
      }
    }, [isLargerThanMd, onClose]);
  }

  return (
    <Box minH="100vh" bg={theme.color.background} color={theme.color.font}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }} isLight={isLight || false} theme={theme} links={links} />
      {!isLight && <>
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent isLight={isLight || false} onClose={onClose} theme={theme} links={links} />
          </DrawerContent>
        </Drawer>
        <MobileNav display={{ base: 'flex', md: 'none' }} width={{
          base: '100%',
          sm: '80%',
        }} theme={theme} onOpen={onOpen} />
      </>}
      <Box ml={{ base: 0, md: 260, lg: 360 }}>
        {children}
      </Box>
    </Box>
  );
}