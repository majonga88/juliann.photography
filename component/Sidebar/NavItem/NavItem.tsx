import { Flex, FlexProps, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends FlexProps {
    path: string;
    color: string;
    hoverColor: string;
    children: ReactNode;
}

export function NavItem({ path, color, hoverColor, children, ...rest }: Props) {
    return (
        <Link href={path} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} color={color}>
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
        </Link>
    )
}