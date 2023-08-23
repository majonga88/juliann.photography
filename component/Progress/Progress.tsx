import { motion, useSpring } from "framer-motion";

import styled from "@emotion/styled";

interface Props {
  scrollYProgress: any;
  background: string;
}

const StyledProgress = styled(motion.div)({
  position: "fixed",
  display: "flex",
  left: "0",
  right: "0",
  bottom: "0",
  height: "0.4em",
});

export function Progress({ scrollYProgress, background }: Props) {
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <StyledProgress style={{ scaleX, background: background }} />;
}
