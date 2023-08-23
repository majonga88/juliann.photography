"use client";

import { Text, Grid, GridItem, Button } from "@chakra-ui/react";
import { League_Spartan } from "next/font/google";
import { useRouter } from "next/navigation";

const ls400 = League_Spartan({
  weight: "400",
  subsets: ["latin"],
});

export default function NotFound({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  
  const router = useRouter();

  return (
    <Grid
      gap={3}
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={ls400.className}
    >
      <GridItem textAlign="center">
        <Text fontSize={"4.5rem"} margin={"6rem"}>
          Did you lost your way ?
        </Text>
        <Button onClick={() => router.back()} color={"rgb(0, 0, 0)"} size={"lg"} fontSize={"2rem"}>
          Go back
        </Button>
      </GridItem>
    </Grid>
  );
}
