import { Grid, GridItem, HStack, Heading, Select } from "@chakra-ui/react";
import ClassManagement from "../components/ClassManagement";
import ClassCard from "../components/ClassCard";

export default function ClassSettings() {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      gap={6}
      bg="grey.50"
      m="10px"
      mt="90px"
      pr="45px"
    >
      <GridItem colSpan={6}>
        <HStack justify="space-between">
          <Heading as="h1" fontSize="32px" fontWeight="700">
            Class Settings
          </Heading>
          <Select
            variant="outline"
            width="150px"
            placeholder="Grade:"
            defaultChecked="1st"
          >
            <option>1st</option>
            <option>2st</option>
            <option>3st</option>
          </Select>
        </HStack>
      </GridItem>
      <GridItem
        colSpan={2}
        bg="white"
        minHeight="100vh"
        borderRadius="26px"
        shadow="2xl"
      >
        <ClassManagement />
      </GridItem>
      <GridItem colSpan={4} minHeight="100vh" borderRadius="26px" shadow="2xl">
        <ClassCard />
      </GridItem>
    </Grid>
  );
}
