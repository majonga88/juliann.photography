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
import Link from 'next/link';

export default function Home() {
  return (
    <Grid
    gridTemplateRows={{
      sm: "100px1fr",
    }}
    gridTemplateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(6, 1fr)",
        lg: "repeat(6, 1fr)"
      }}
      gridTemplateAreas={{
        base: `
        'archi' 
        'wildlife' 
        'nature' 
        'citylife'
        'lights'
        'about'`,
        md: `'archi wildlife nature citylife lights about'`,
        lg: `
        'archi wildlife nature citylife lights about'`,
      }}
  h='100vh'
>
  <GridItem area={'archi'}>
  <Link href={'/architecture'}>
    <Image src='/architecture/projects-archi-001.jpg'  width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh'}} objectFit={'cover'} alt='Architecture' />
  </Link>
  </GridItem>
  <GridItem area={'wildlife'}>
    <Link href={'/wildlife'}>
  <Image src='/wildlife/projects-wildlife-001.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh'}} objectFit={'cover'} alt='Wildlife' />
  </Link>
  </GridItem>
  <GridItem area={'nature'}>
  <Link href={'/nature'}>
  <Image src='/nature/projects-nature-001.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh'}} objectFit={'cover'} alt='Nature' />
  </Link>
  </GridItem>
  <GridItem area={'citylife'}>
  <Link href={'/city-life'}>
  <Image src='/city-life/projects-citylife-001.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh'}} objectFit={'cover'} alt='City life' />
  </Link>
  </GridItem>
  <GridItem area={'lights'}>
  <Link href={'/lights'}>
  <Image src='/lights/projects-lights-001.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh'}} objectFit={'cover'} alt='Lights' />
  </Link>
  </GridItem>
  <GridItem area={'about'}>
  <Link href={'/about'}>
  <Image src='/about-me.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh'}} objectFit={'cover'} alt='About me' />
  </Link>
  </GridItem>
</Grid>
  )
}
