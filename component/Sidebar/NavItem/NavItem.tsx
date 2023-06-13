import { Flex, FlexProps, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props extends FlexProps {
    path: string;
    color: string;
    hoverColor: string;
    children: ReactNode;
}

const MotionLink = motion(Link);

export function NavItem({ path, color, hoverColor, children, ...rest }: Props) {
    return (
        <MotionLink 
        href={path} 
        style={{ textDecoration: 'none' }} 
        _focus={{ boxShadow: 'none' }} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        fontSize="2.5rem" fontWeight="300" color={color}>
            <Flex
                align="center"
                mx="8"
                role="group"
                cursor="pointer"
                _hover={{
                    color: hoverColor,
                }}
                {...rest}>
                {children}
            </Flex>
        </MotionLink>
    )
}