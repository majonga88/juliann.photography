"use client"
import Sidebar from '@/component/Sidebar/Sidebar';
import Tile from '@/component/Tile/Tile';
import { Transition } from '@/component/Transition/Transition';
import { home } from '@/data';
import {
  Grid,
  GridItem,
} from '@chakra-ui/react';

import React from "react";

export default function Home() {
  return (
    <Sidebar links={home.links} theme={home.theme}>
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
        <GridItem area={'architecture'}>
          <Tile tile={home.tiles[0]} />
        </GridItem>
        <GridItem area={'wildlife'}>
          <Tile tile={home.tiles[1]} />
        </GridItem>
        <GridItem area={'nature'}>
          <Tile tile={home.tiles[2]} />
        </GridItem>
        <GridItem area={'citylife'}>
          <Tile tile={home.tiles[3]} />
        </GridItem>
        <GridItem area={'lights'}>
          <Tile tile={home.tiles[4]} />
        </GridItem>
        <GridItem area={'about'}>
          <Tile tile={home.tiles[5]} />
        </GridItem>
      </Grid>
      <Transition backgroundColor={home.theme.color.background} />
    </Sidebar>
  )
}
