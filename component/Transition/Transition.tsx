import { motion, useIsPresent } from "framer-motion";

import styles from './Transition.module.css';

export function Transition(): JSX.Element {

    const isPresent = useIsPresent();

    return (
        <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1, backgroundColor: "#000" }}
        className={styles.transition}
      />
    )
}