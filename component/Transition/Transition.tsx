import { motion, useIsPresent } from "framer-motion";

import styled from "@emotion/styled";

interface Props {
  backgroundColor: string
}

const StyledTransition = styled(motion.div)({
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: '2'
})

export function Transition({ backgroundColor }: Props): JSX.Element {

    const isPresent = useIsPresent();

    return (
        <StyledTransition
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 2, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 2, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1, backgroundColor: backgroundColor }}
      />
    )
}