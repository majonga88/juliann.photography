import { motion, useSpring } from "framer-motion";

import styles from './Progress.module.css';

interface Props {
    scrollYProgress: any,
    background: string
}

export function Progress({ scrollYProgress, background }: Props) {

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });

    return (
        <motion.div className={styles.progress} style={{ scaleX, background: background }} />
    )
}