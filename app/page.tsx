"use client"
import SimpleSidebar from '@/template/sidebar';
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
import { motion, useIsPresent } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from "react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

export default function Home() {

  const isPresent = useIsPresent();
  const [isArchitectureHovered, setArchitectureHovered] = useState(false);
  const [isWildlifeHovered, setWildlifeHovered] = useState(false);
  const [isNatureHovered, setNatureHovered] = useState(false);
  const [isCityLifeHovered, setCityLifeHovered] = useState(false);
  const [isLightsHovered, setLightsHovered] = useState(false);
  const [isAboutHovered, setAboutHovered] = useState(false);

  return (
    <SimpleSidebar>
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ easeInOut: [0.17, 0.67, 0.83, 0.67] }} whileHover={{ scale: 0.9 }} >
              <MotionBox
                position="relative"
                onHoverStart={() => setArchitectureHovered(true)}
                onHoverEnd={() => setArchitectureHovered(false)}
              >
                <Image src='/archi/archi-1.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt='Architecture' />
                <MotionText className='tile-title'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isArchitectureHovered ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Architecture
                </MotionText>
              </MotionBox >
            </motion.div>
          </Link>
        </GridItem>
        <GridItem area={'archi'}>
          <Image src='/archi/archi-1.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt='Architecture' />
        </GridItem>
        <GridItem area={'wildlife'}>
          <Link href={'/wildlife'}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ easeInOut: [0.17, 0.67, 0.83, 0.67], delay: 0.1 }} whileHover={{ scale: 0.9 }} >
              <MotionBox
                position="relative"
                onHoverStart={() => setWildlifeHovered(true)}
                onHoverEnd={() => setWildlifeHovered(false)}
              >
                <Image src='/wildlife/wildlife-1.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt='Wildlife' />
                <MotionText className='tile-title'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isWildlifeHovered ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Wildlife
                </MotionText>
              </MotionBox >
            </motion.div>
          </Link>
        </GridItem>
        <GridItem area={'wildlife'}>
          <Image src='/wildlife/wildlife-1.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt='Wildlife' />
        </GridItem>
        <GridItem area={'nature'}>
          <Link href={'/nature'}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ easeInOut: [0.17, 0.67, 0.83, 0.67], delay: 0.1 }} whileHover={{ scale: 0.9 }} >
              <MotionBox
                position="relative"
                onHoverStart={() => setNatureHovered(true)}
                onHoverEnd={() => setNatureHovered(false)}
              >
                <Image src='/nature/nature-1.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt='Nature' />
                <MotionText className='tile-title'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isNatureHovered ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Nature
                </MotionText>
              </MotionBox >
            </motion.div>
          </Link>
        </GridItem>
        <GridItem area={'nature'}>
          <Image src='/nature/nature-1.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt='Nature' />
        </GridItem>
        <GridItem area={'citylife'}>
          <Link href={'/city-life'}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ easeInOut: [0.17, 0.67, 0.83, 0.67], delay: 0.1 }} whileHover={{ scale: 0.9 }} >
              <MotionBox
                position="relative"
                onHoverStart={() => setCityLifeHovered(true)}
                onHoverEnd={() => setCityLifeHovered(false)}
              >
                <Image src='/city-life/city-life-1.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt='City-life' />
                <MotionText className='tile-title'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isCityLifeHovered ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  whiteSpace={'nowrap'}
                >
                  City-life
                </MotionText>
              </MotionBox >
            </motion.div>
          </Link>
        </GridItem>
        <GridItem area={'citylife'}>
          <Link href={'/city-life'}>
            <Image src='/city-life/city-life-1.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt='City-life' />
          </Link>
        </GridItem>
        <GridItem area={'lights'}>
          <Link href={'/lights'}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ easeInOut: [0.17, 0.67, 0.83, 0.67], delay: 0.1 }} whileHover={{ scale: 0.9 }} >
              <MotionBox
                position="relative"
                onHoverStart={() => setLightsHovered(true)}
                onHoverEnd={() => setLightsHovered(false)}
              >
                <Image src='/lights/lights-1.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt='Lights' />
                <MotionText className='tile-title'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isLightsHovered ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Lights
                </MotionText>
              </MotionBox >
            </motion.div>
          </Link>
        </GridItem>
        <GridItem area={'lights'}>
          <Link href={'/lights'}>
            <Image src='/lights/lights-1.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt='Lights' title='eeee'></Image>
          </Link>
        </GridItem>
        <GridItem area={'about'}>
          <Link href={'/about'}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ easeInOut: [0.17, 0.67, 0.83, 0.67], delay: 0.1 }} whileHover={{ scale: 0.9 }} >
              <MotionBox
                position="relative"
                onHoverStart={() => setAboutHovered(true)}
                onHoverEnd={() => setAboutHovered(false)}
              >
                <Image src='/about-me.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt='About me' />
                <MotionText className='tile-title'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isAboutHovered ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  About
                </MotionText>
              </MotionBox >
            </motion.div>
          </Link>
        </GridItem>
        <GridItem area={'about'}>
          <Link href={'/about'}>
            <Image src='/about-me.jpg' width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt='About me' />
          </Link>
        </GridItem>
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      </Grid>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1, backgroundColor: "#000" }}
        className="privacy-screen"
      />
    </SimpleSidebar>
  )
}
