import { Grid, GridItem, Box } from "@chakra-ui/react";

export default function ClassSettings() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={6} bg="grey.50" m="10px">
      <GridItem colSpan={6} bg="tomato">
        <Box>
          <h1>Class Settings</h1>
          <span>some filter</span>
        </Box>
      </GridItem>
      <GridItem colSpan={2} bg="lightgreen" minHeight="100vh">
        <h1>Class Settings</h1>
      </GridItem>
      <GridItem colSpan={4} bg="lightblue" minHeight="100vh">
        <h1>Specific class</h1>
      </GridItem>
    </Grid>
  );
}
