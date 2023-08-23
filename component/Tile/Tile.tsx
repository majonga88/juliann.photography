import {
  Box,
  Text,
  Image,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import { PhotoMetadata } from "@/metadata/PhotoMetadata";
import styled from "@emotion/styled";
import { League_Spartan } from "next/font/google";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const ls400 = League_Spartan({
  weight: "400",
  subsets: ["latin"],
});

export interface SingleTileProps {
  tile: PhotoMetadata;
}

const StyledMotionText = styled(MotionText)({
  position: "absolute",
  "@media screen and (max-width: 48em)": {
    fontSize: "3.5rem",
    fontWeight: "400",
    top: "2vw",
    left: "6vw",
    position: "absolute",
    right: "3rem",
    direction: "rtl",
    bottom: 0,
  },
  "@media screen and (min-width: 48em)": {
    fontSize: "5rem",
    fontWeight: "400",
    top: "6vw",
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
    bottom: "4rem",
  },
  "@media screen and (min-width: 62em)": {
    fontSize: "5rem",
    fontWeight: "400",
    top: "6vw",
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
    bottom: "4rem",
  },
});

export default function Tile({ tile }: SingleTileProps) {
  const [isHovered, setHovered] = useState(false);
  const [isTaped, setTaped] = useState(false);
  const scaleValues = useBreakpointValue({
    base: { scaleX: 0.9, scaleY: 0.9 },
    sm: { scaleX: 0.9, scaleY: 0.9 },
    md: { scaleX: 0.9, scaleY: 0.9 },
    lg: { scaleX: 0.9, scaleY: 0.9 },
  });

  return (
    <GridItem style={{ backgroundColor: isTaped ? "#ffffff" : "#000" }}>
      <Link href={tile.href || `/`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ overflow: "hidden" }}
          transition={{
            easeInOut: [0.17, 0.67, 0.83, 0.67],
            delay: tile.delay || 0,
          }}
          whileTap={scaleValues}
        >
          <MotionBox
            position="relative"
            whileHover={{ scale: 1.1 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onTapStart={() => setTaped(true)}
            onTapEnd={() => setTaped(false)}
            display="flex"
            alignItems="top"
            justifyContent="center"
          >
            <Image
              src={tile.imgLocation}
              width={"100%"}
              height={{ base: "20vh", md: "100vh", lg: "100vh" }}
              objectFit={"cover"}
              alt={tile.alt}
            />
            <StyledMotionText
              initial={{ opacity: 1 }}
              color={tile.titleColor || "rgb(255, 255, 255, 0.8)"}
              className={ls400.className}
            >
              {tile.title}
            </StyledMotionText>
          </MotionBox>
        </motion.div>
      </Link>
    </GridItem>
  );
}
