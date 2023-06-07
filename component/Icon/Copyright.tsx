import { Box, Text } from "@chakra-ui/react";

interface Props {
    logoColor: string
}

export function Copyright({ logoColor }: Props) {
    return (
        <Box float="right">
            <Text position="fixed" bottom="0" color={logoColor}>©</Text>
        </Box>
    )
}