"use client"

import { architecturePhotosMetadata } from "@/data";
import { Gallery } from "@/template/Gallery";
import ScrollbarStyles from "@/template/Scrollbar";
import LightSidebar from "@/template/light-sidebar";
import { Box, Container, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";

import { League_Spartan, Work_Sans } from 'next/font/google';
 
const ws300 = Work_Sans({
  weight: '300',
  subsets: ['latin'],
});

const ls400 = League_Spartan({
  weight: '400',
  subsets: ['latin'],
});

export default function Architecture() {
  return (
      <LightSidebar>
        <ScrollbarStyles scrollbarCornerColor="rgb(133, 203, 231)" scrollbarThumbColor="rgb(133, 203, 231)" />
        <Container pt={'77px'} maxW={'container.lg'}>
        <Grid gap={6}>
      <GridItem w="100%">
          <Heading as={'h1'} className={ls400.className} fontSize={'3.85rem'} lineHeight={'1.25'}>Architecture</Heading>
        </GridItem>
        <GridItem w="100%">
          <Flex className={ws300.className} fontSize={'1.75rem'} lineHeight={'1.25'}>
              <i>
              Architecture is like writing. You have to edit it over and over so it looks effortless
              </i>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex pb={10} pe={8} className={ws300.className} fontSize={'1.75rem'} lineHeight={'1.25'} justifyContent="flex-end">
              <i>
              - Zaha Hadid
              </i>
          </Flex>
        </GridItem>
      </Grid>
        <Gallery
          gallery={architecturePhotosMetadata}
          title="White lines of Canary Wharf"
          titleWidth={8}
          category="archi"
          alt="A building in Canary Wharf"
        />
        </Container>
      </LightSidebar>
  )


}