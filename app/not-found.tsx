"use client";

import { Text, Grid, GridItem, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

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
    >
      <GridItem textAlign="center">
        <Text fontSize={"4.5rem"} margin={"6rem"}>
          Did you lost your way ?
        </Text>
        <Button onClick={() => router.back()} color={"rgb(0, 0, 0)"}>
          Go back
        </Button>
      </GridItem>
    </Grid>
  );
}
