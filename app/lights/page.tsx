"use client"

import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react';

import { Image } from '@chakra-ui/react'

export default function Lights() {
  return (
<Container py={5} maxW={'container.lg'}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
          lg: 'repeat(1, 1fr)',
        }}
        gap={14} pt={'15'}>
        <GridItem pt={'15'} w="100%" colSpan={{ base: 1, sm: 1, md: 1, lg: 1 }}>
          <Heading pt={'4'} as={'h2'} fontFamily={'unset'}>Medium Length Title</Heading>
          <Box pt={'4'} fontSize={'lg'}>
              Description for the number. People always pay attention to
              numbers.
            </Box>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
          <Image src='/lights/projects-lights-001.jpg' alt='Dan Abramov' />
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
          <Image src='/lights/projects-lights-002.jpg' alt='Dan Abramov' />
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
          <Image src='/lights/projects-lights-003.jpg' alt='Dan Abramov' />
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}
