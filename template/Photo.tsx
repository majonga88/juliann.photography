"use client"

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Box, Image } from '@chakra-ui/react'

function useParallax(value: MotionValue<number>, distance: string) {
  return useTransform(value, [0, 1], ["-" + distance, distance]);
}

interface Props {
  alt: string;
  category: string;
  index: number;
  title: string;
  titleFontColor: string;
  aspectRatio?: string;
}

export function Photo({ alt, category, index, title, titleFontColor, aspectRatio }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, "20vh");

  return (
    <section>
      <Box ref={ref} m={6}>
        <Image src={`/${category}/${category}-${index}.jpg`} alt={alt} />
      </Box>
      <motion.h2 style={{ y, color: titleFontColor }}>{`#00${index}`}</motion.h2>
    </section>
  );
}
