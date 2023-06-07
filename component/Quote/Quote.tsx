import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { League_Spartan, Work_Sans } from "next/font/google";

interface Props {
    title: string,
    quote?: string,
    author?: string
}

const ws300 = Work_Sans({
    weight: '300',
    subsets: ['latin'],
});

const ls400 = League_Spartan({
    weight: '400',
    subsets: ['latin'],
});

export function Quote({ title, quote, author }: Props) {
    return (
        <Grid gap={6}>
            <GridItem w="100%">
                <Heading as={'h1'} className={ls400.className} fontSize={'3.85rem'} lineHeight={'1.25'}>{title}</Heading>
            </GridItem>
            {quote && <GridItem w="100%">
                <Flex className={ws300.className} fontSize={'1.75rem'} lineHeight={'1.25'}>
                    <i>
                        {quote}
                    </i>
                </Flex>
            </GridItem>}
            {author && <GridItem w="100%">
                <Flex pb={10} pe={8} className={ws300.className} fontSize={'1.75rem'} lineHeight={'1.25'} justifyContent="flex-end">
                    <i>
                        {author}
                    </i>
                </Flex>
            </GridItem>}
        </Grid>
    )
}