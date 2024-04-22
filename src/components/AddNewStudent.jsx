import {
  Text,
  Divider,
  Box,
  Input,
  Grid,
  GridItem,
  VStack,
  HStack,
} from "@chakra-ui/react";

export default function AddNewStudent({ onAddNewStudent }) {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      position="absolute"
      w="100%"
      h="100vh"
      top="0"
      left="0"
      border="1px solid red"
      backgroundColor="rgba(0, 0, 0, 0.8)"
      backdropFilter="blur(10px)"
      zIndex={1000}
    >
      <GridItem colSpan={2} onClick={onAddNewStudent} />
      <GridItem colSpan={1} backgroundColor="white" border="1px solid green">
        <VStack>
          <Text as="h1">Add new student</Text>
          <Text>An email will be send</Text>
        </VStack>
        <Divider margin="48px 0" />
        <Box>
          <HStack>
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
          </HStack>
          <Input placeholder="Email" />
        </Box>
      </GridItem>
    </Grid>
  );
}
