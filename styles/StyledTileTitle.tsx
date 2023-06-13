import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const StyledTileTitle = styled(motion.text)`
  position: absolute;

  @media screen and (max-width: 48em) {
    font-size: 1.875rem;
    top: 2vw;
    left: 6vw;
  }

  @media screen and (min-width: 48em) {
    font-size: 2.5rem;
    top: 6vw;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  @media screen and (min-width: 62em) {
    font-size: 2.5rem;
    top: 6vw;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
`;

export default StyledTileTitle;
