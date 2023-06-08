import { Box, Text, Image, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ColorThief from "colorthief";
import tinycolor from "tinycolor2";

import styles from './Tile.module.css';

const MotionBox = motion(Box);
const MotionText = motion(Text);

interface Props {
    title: string,
    titleColor?: string,
    path: string,
    reference: string,
    delay?: number
}

export default function Tile({ title, titleColor, path, reference, delay }: Props): JSX.Element {

    const [isHovered, setHovered] = useState(false);
    const scaleValues = useBreakpointValue({ base: { scaleX: 0.9, scaleY: 0.9 }, sm: { scaleX: 0.9, scaleY: 0.9 }, md: { scaleX: 0.9, scaleY: 0.9 }, lg: { scaleX: 0.9, scaleY: 0.9 }});

    return (
        <GridItem style={{ backgroundColor: isHovered ? '#ffffff' : '#000' }}>
            <Link href={`/${path}`}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    style={{ overflow: 'hidden' }}
                    transition={{ easeInOut: [0.17, 0.67, 0.83, 0.67], delay: delay || 0 }} whileTap={scaleValues} >
                    <MotionBox
                        position="relative"
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={() => setHovered(true)}
                        onHoverEnd={() => setHovered(false)}
                        display="flex"
                        alignItems="top"
                        justifyContent="center"
                    >
                        <Image src={`/${reference}/${reference}-1.jpg`} width={'100%'} height={{ base: '20vh', md: '100vh', lg: '100vh' }} objectFit={'cover'} alt='Architecture' />
                        <MotionText className={styles.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            color={titleColor || "rgb(255, 255, 255)"}
                        >
                            {title}
                        </MotionText>
                    </MotionBox >
                </motion.div>
            </Link>
        </GridItem>
    )
}