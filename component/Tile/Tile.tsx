import { Box, Text, Image, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import styles from './Tile.module.css';
import { PhotoMetadata } from "@/metadata/PhotoMetadata";

const MotionBox = motion(Box);
const MotionText = motion(Text);

export interface SingleTileProps {
    tile: PhotoMetadata;
}

export default function Tile({ tile }: SingleTileProps) {

    const [isHovered, setHovered] = useState(false);
    const [isTaped, setTaped] = useState(false);
    const scaleValues = useBreakpointValue({ base: { scaleX: 0.9, scaleY: 0.9 }, sm: { scaleX: 0.9, scaleY: 0.9 }, md: { scaleX: 0.9, scaleY: 0.9 }, lg: { scaleX: 0.9, scaleY: 0.9 }});

    return (
        <GridItem style={{ backgroundColor: isTaped ? '#ffffff' : '#000' }}>
            <Link href={tile.href || `/`}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    style={{ overflow: 'hidden' }}
                    transition={{ easeInOut: [0.17, 0.67, 0.83, 0.67], delay: tile.delay || 0 }} whileTap={scaleValues} >
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
                        <Image src={tile.imgLocation} width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt={tile.alt} />
                        <MotionText className={styles.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            color={tile.titleColor || "rgb(255, 255, 255)"}
                        >
                            {tile.title}
                        </MotionText>
                    </MotionBox >
                </motion.div>
            </Link>
        </GridItem>
    )
}