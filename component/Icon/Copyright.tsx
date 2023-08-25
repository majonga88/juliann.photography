import { Box, Text } from "@chakra-ui/react";
import { League_Spartan } from "next/font/google";

interface Props {
  logoColor: string;
}

const ls400 = League_Spartan({
  weight: "400",
  subsets: ["latin"],
});

export function Copyright({ logoColor }: Props) {
  return (
    <Box float="right">
      <Text position="fixed" bottom="4" color={logoColor} fontSize="2rem" className={ls400.className}>
        ©
      </Text>
    </Box>
  );
}
