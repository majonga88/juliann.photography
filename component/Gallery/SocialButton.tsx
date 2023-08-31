import { ThemeProps } from "@/metadata/ThemeMetadata";
import { useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { League_Spartan } from "next/font/google";

const ls400 = League_Spartan({
    weight: "400",
    subsets: ["latin"],
});

const ButtonContainer = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(255 255 255);
  border-radius: 1rem;
  cursor: pointer;
  position: fixed;
  padding: 0.80rem;
`;

const Arrow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: rgb(0 0 0);
`;

const Text = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: rgb(0 0 0);
  white-space: nowrap;
`;

interface Props {
    theme: ThemeProps,
    path: string,
    title: string,
    viewBox?: string,
    width?: string,
    height?: string,
    src: string,
}

const SocialButton = ({ theme, viewBox, width, height, path, title, src }: Props) => {

    const buttonVariants = {
        initial: { width: "5rem" },
        hover: { width: "15rem" },
        tap: { width: "15rem" },
    };

    const textVariants = {
        initial: { opacity: 0, x: "-1rem", y: "1rem" },
        hover: { opacity: 1, x: "0" },
        tap: { opacity: 1, x: "0" },
    };

    const arrowVariants = {
        initial: { opacity: 1, rotate: 0 },
        hover: { opacity: 1, rotate: 90 },
        tap: { opacity: 1, rotate: 90 },
    };

    return (
        <ButtonContainer
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            className={ls400.className}
            href={src}
        >
            <Arrow variants={arrowVariants}>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={viewBox}
                    style={{ width: '2.5rem', height: '2.5rem' }}
                >
                    <motion.path
                        d={path}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0.8, 0.2, 0] },
                        }}
                        strokeWidth={0.5}
                        strokeDasharray="0 1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="100%"
                    />
                </motion.svg>
            </Arrow>
            <Text variants={textVariants}>
                <span>{title}</span>
            </Text>
        </ButtonContainer>
    );
};

export default SocialButton;

