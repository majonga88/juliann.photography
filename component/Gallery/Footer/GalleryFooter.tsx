import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

interface Props {
    color: string,
    hoverColor: string
}

const StyledFooter = styled.footer({
    padding: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center'
});

export function GalleryFooter({ color, hoverColor }: Props) {
    return (
        <StyledFooter>
            <Link href="/" style={{ color: color }}>
                <Flex alignItems={"center"} _hover={{ color: hoverColor }}>
                    <ArrowBackIcon w={8} h={8} />
                    <Text fontSize={'4.5rem'} margin={'6rem'}>Back to galleries</Text>
                </Flex>
            </Link>
        </StyledFooter>
    )
}