"use client"

import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import { Photo } from "./Photo";
import Link from "next/link";
import { Text, Flex } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { loadHoverColor } from "./sidebar";

export interface GalleryMetadata {
  theme: {
    background: string;
    font: string;
  }, 
  photos: PhotoMetadata[]
}

export interface PhotoMetadata {
  title: string;
  aspectRatio?: string;
}

interface Props {
  alt: string;
  category: string;
  title: string;
  titleWidth: number;
  gallery: GalleryMetadata;
}

export function Gallery({ category, alt, title, titleWidth, gallery }: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const isPresent = useIsPresent();

  const hoverColor = loadHoverColor()

  return (
<>
      {gallery.photos.map(({ title, aspectRatio }, index) => (
        <Photo
          category={category}
          index={index + 1}
          alt={alt}
          title={title}
          titleFontColor={gallery.theme.font}
          aspectRatio={aspectRatio}
        />
      ))}
    <motion.div className="progress" style={{ scaleX, background: gallery.theme.background }} />
      <footer className="back">
        <Link href="/" style={{ color: gallery.theme.font }}><Flex alignItems={"center"} _hover={{color: hoverColor}}><ArrowBackIcon w={8} h={8}/><Text fontSize={'4.5rem'} margin={'6rem'}>Back to galleries</Text></Flex></Link>
      </footer>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1, backgroundColor: gallery.theme.background }}
        className="privacy-screen"
      />
    </>
  );
}