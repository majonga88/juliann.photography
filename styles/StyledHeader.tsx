import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const StyledHeader = styled(motion.h2)`
    font-size: 4vw;
    left: calc(56vw);
    top: calc(70vh);
    font-weight: 700;
    letter-spacing: -3px;
    line-height: 1.8;
    position: absolute;
`;

export default StyledHeader;