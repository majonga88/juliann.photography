"use client"

import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react'

import { Image } from '@chakra-ui/react'

export default function Architecture() {
  return (
<Container py={5} maxW={'container.lg'} backgroundColor={"rgb(133, 203, 231)"}>
      <Grid gap={6}>
      <GridItem w="100%">
          <Heading as={'h1'} fontSize={'5rem'} fontFamily={'unset'} fontWeight={'unset'} lineHeight={'unset'}>Architecture</Heading>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'row'} pb={10}>
            <Box fontSize={'lg'} fontStyle={'italic'}>
              Architecture is like writing. You have to edit it over and over so it looks effortless – Zaha Hadid
            </Box>
          </Flex>
        </GridItem>
      </Grid>
      <Grid gap={12}>
        <GridItem w="100%" pb={4}>
          <Flex flexDirection={'row'}>
            <Image src='/architecture/projects-archi-001.jpg' alt='Dan Abramov' />
          </Flex>
        </GridItem>
        <GridItem w="100%" pb={4}>
          <Flex flexDirection={'row'}>
            <Image src='/architecture/projects-archi-002.jpg' alt='Dan Abramov' />
          </Flex>
        </GridItem>
        <GridItem w="100%" pb={4}>
          <Flex flexDirection={'row'}>
            <Image src='/architecture/projects-archi-003.jpg' alt='Dan Abramov' />
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}
