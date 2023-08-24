import { Copyright } from "@/component/Icon/Copyright";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { League_Spartan } from "next/font/google";
import Link from "next/link";

interface Props {
  color: string;
  hoverColor: string;
}

const ls400 = League_Spartan({
  weight: "400",
  subsets: ["latin"],
});

const StyledFooter = styled.footer({
  padding: "100px",
  display: "flex",
  justifyContent: "center",
  alignSelf: "center",
});

export function GalleryFooter({ color, hoverColor }: Props) {

  const [isSmallerThanMd] = useMediaQuery("(max-width: 62em)");

  return (
    <StyledFooter>
      {isSmallerThanMd && (<Link href="/" style={{ color: color }}>
        <Flex alignItems={"center"} _hover={{ color: hoverColor }}>
          <ArrowBackIcon w={8} h={8} />
          <Text fontSize={"4.5rem"} margin={"6rem"} className={ls400.className} textAlign={"center"}>
            Back to galleries
          </Text>
        </Flex>
      </Link>)}
    </StyledFooter>);
}
