import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
    color: string,
    hoverColor: string
}

export function GalleryFooter({ color, hoverColor }: Props) {
    return (
        <footer className="back">
            <Link href="/" style={{ color: color }}>
                <Flex alignItems={"center"} _hover={{ color: hoverColor }}>
                    <ArrowBackIcon w={8} h={8} />
                    <Text fontSize={'4.5rem'} margin={'6rem'}>Back to galleries</Text>
                </Flex>
            </Link>
        </footer>
    )
}