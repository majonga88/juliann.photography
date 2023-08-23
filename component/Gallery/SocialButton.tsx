import { ThemeProps } from "@/metadata/ThemeMetadata";
import { useMediaQuery } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { League_Spartan } from "next/font/google";
import Link from "next/link";

const ls400 = League_Spartan({
    weight: "400",
    subsets: ["latin"],
});

const ButtonContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 1rem;
  cursor: pointer;
  position: fixed;
  margin: 1rem;
`;

const Arrow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  font-size: 1.5rem;
  color: rgb(0, 0, 0);
`;

const Text = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  font-size: 1.5rem;
  color: rgb(0, 0, 0);
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

const SocialButton = ({theme, viewBox, width, height, path, title, src}: Props) => {

    const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)");

    const buttonVariants = isSmallerThanMd ? {
        initial: { height: "5rem", width: "5rem" },
        hover: { height: "15rem", width: "5rem" }
    } : {
        initial: { width: "5rem" },
        hover: { width: "15rem" }
    };

    const textVariants = isSmallerThanMd ? {
        initial: { opacity: 0, y: "20px" },
        hover: { opacity: 0, y: "0" }
    } : {
        initial: { opacity: 0, x: "-20px" },
        hover: { opacity: 1, x: "0" }
    };

    const arrowVariants = {
        initial: { opacity: 1, rotate: 0 },
        hover: { opacity: 1, rotate: 90 }
    };
    
    return (
        <Link href={src}>
            <ButtonContainer
                initial="initial"
                whileHover="hover"
                variants={buttonVariants}
                className={ls400.className}
            >
                <Arrow variants={arrowVariants}>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox={viewBox}
                        width={width}
                        height={height}
                    >
                        <motion.path
                            d={path}
                            //variants={theme.logo.variants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut" },
                                fill: { duration: 2, ease: [1, 0.8, 0.2, 0] },
                            }}
                            //stroke={theme.logo.stroke}
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
        </Link>
    );
};

export default SocialButton;

