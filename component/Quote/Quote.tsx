import {
  Flex,
  Grid,
  GridItem,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { League_Spartan, Work_Sans } from "next/font/google";

interface Props {
  title: string;
  description?: Array<string>;
  quote?: string;
  author?: string;
}

const ws300 = Work_Sans({
  weight: "300",
  subsets: ["latin"],
});

const ls400 = League_Spartan({
  weight: "400",
  subsets: ["latin"],
});

export function Quote({ title, description, quote, author }: Props) {
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
  const authorSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });

  return (
    <Grid gap={6}>
      <GridItem w="100%">
        <Heading
          as={"h1"}
          size={headingSize}
          className={ls400.className}
          lineHeight={"1.25"}
          fontFamily={""}
          fontWeight={"400"}
        >
          {title}
        </Heading>
      </GridItem>
      {description &&
        description.map((descriptionItem, index) => (
          <GridItem w="100%" key={index}>
            <Flex
              className={ls400.className}
              fontSize={"1.8rem"}
              lineHeight={"1.25"}
            >
              {descriptionItem}
            </Flex>
          </GridItem>
        ))}
      {quote && (
        <GridItem w="100%">
          <Flex
            className={ls400.className}
            fontSize={"1.8rem"}
            lineHeight={"1.25"}
          >
            {quote}
          </Flex>
        </GridItem>
      )}
      {author && (
        <GridItem w="100%">
          <Flex
            pb={10}
            pe={8}
            className={ls400.className}
            fontSize={authorSize}
            lineHeight={"1.25"}
            justifyContent="flex-end"
          >
            {author}
          </Flex>
        </GridItem>
      )}
    </Grid>
  );
}
