import { Grid, GridItem, Box } from "@chakra-ui/react";
import ClassManagement from "../components/ClassManagement";
import ClassCard from "../components/ClassCard";

export default function ClassSettings() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={6} bg="grey.50" m="10px">
      <GridItem colSpan={6} bg="tomato">
        <Box>
          <h1>Class Settings</h1>
          <span>some filter</span>
        </Box>
      </GridItem>
      <GridItem
        colSpan={2}
        bg="white"
        minHeight="100vh"
        borderRadius="26px"
        shadow="dark-lg"
      >
        <ClassManagement />
      </GridItem>
      <GridItem colSpan={4} bg="lightblue" minHeight="100vh">
        <ClassCard />
      </GridItem>
    </Grid>
  );
}
