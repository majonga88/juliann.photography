"use client"
import Tile from '@/component/Tile/Tile';
import { Transition } from '@/component/Transition/Transition';
import SimpleSidebar from '@/template/sidebar';
import {
  Grid,
  GridItem,
} from '@chakra-ui/react';

import React from "react";

export default function Home() {


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
        'architecture' 
        'wildlife' 
        'nature' 
        'citylife'
        'lights'
        'about'`,
          md: `'architecture wildlife nature citylife lights about'`,
          lg: `'architecture wildlife nature citylife lights about'`,
        }}
        h='100vh'
      >
        <GridItem area={'architecture'} >
          <Tile title={'Architecture'} path={'architecture'} reference={'architecture'} />
        </GridItem>
        <GridItem area={'wildlife'}>
          <Tile title={'Wildlife'} path={'wildlife'} reference={'wildlife'} delay={0.1} />
        </GridItem>
        <GridItem area={'nature'}>
          <Tile title={'Nature'} path={'nature'} reference={'nature'} delay={0.2} />
        </GridItem>
        <GridItem area={'citylife'}>
          <Tile title={'City-life'} path={'city-life'} reference={'city-life'} delay={0.3} />
        </GridItem>
        <GridItem area={'lights'}>
          <Tile title={'Lights'} path={'lights'} reference={'lights'} delay={0.4} />
        </GridItem>
        <GridItem area={'about'}>
          <Tile title={'About'} path={'about'} reference={'about'} delay={0.5} />
        </GridItem>
      </Grid>
      <Transition/>
    </SimpleSidebar>
  )
}
