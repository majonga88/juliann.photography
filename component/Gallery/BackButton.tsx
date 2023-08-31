import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { League_Spartan } from "next/font/google";
import Link from "next/link";
import { useSharedState } from "../sharedStateProvider";

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
  bottom: 0;
  margin: 10px;
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

const BackButton = () => {

    const { state, setState } = useSharedState();

    const activeVariant = state ? 'hover' : 'initial';

    const buttonVariants = {
        initial: { width: "3rem" },
        hover: { width: "17rem" }
    };

    const textVariants = {
        initial: { opacity: 0, x: "-20px" },
        hover: { opacity: 1, x: "0" }
    };

    return (
        <Link href='/'>
            <ButtonContainer
                initial="initial"
                whileHover="hover"
                animate={activeVariant}
                variants={buttonVariants}
                className={ls400.className}
            >
                <Arrow>
                    <span>←</span>
                </Arrow>
                <Text variants={textVariants}>
                    <span>Back to galleries</span>
                </Text>
            </ButtonContainer>
        </Link>
    );
};

export default BackButton;
