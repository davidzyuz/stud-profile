import {
  Text,
  Divider,
  Box,
  Input,
  Grid,
  GridItem,
  VStack,
  HStack,
  Button,
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
      backgroundColor="rgba(0, 0, 0, 0.8)"
      backdropFilter="blur(10px)"
      zIndex={1000}
    >
      <GridItem colSpan={2} onClick={onAddNewStudent} />
      <GridItem colSpan={1} backgroundColor="white">
        <Grid
          height="100vh"
          templateRows="repeat(3, 1fr)"
          templateColumns="1fr"
          p="24px"
        >
          <GridItem rowSpan={1}>
            <VStack align="flex-start">
              <Text as="h1" fontWeight="700" fontSize="26px" lineHeight="39px">
                Add new student
              </Text>
              <Text
                fontWeight="600"
                fontSize="16px"
                lineHeight="24px"
                color="rgba(8, 38, 63, 0.4)"
              >
                An email will be send
              </Text>
            </VStack>
            <Divider margin="48px 0" />
            <Box>
              <HStack>
                <VStack align="flex-start" w="100%">
                  <Text
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="24px"
                    color="rgba(8, 38, 63, 0.4)"
                  >
                    First name
                  </Text>
                  <Input placeholder="First name" />
                </VStack>
                <VStack align="flex-start" w="100%">
                  <Text
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="24px"
                    color="rgba(8, 38, 63, 0.4)"
                  >
                    Grade
                  </Text>
                  <Input placeholder="Grade" />
                </VStack>
              </HStack>
              <Text
                fontWeight="400"
                fontSize="16px"
                lineHeight="24px"
                color="rgba(8, 38, 63, 0.4)"
                mt="16px"
              >
                Email
              </Text>
              <Input placeholder="Email" />
            </Box>
          </GridItem>

          <GridItem rowSpan="2" alignSelf="flex-end" justifySelf="flex-end">
            <Button
              backgroundColor="rgba(20, 92, 153, 1)"
              width="200px"
              height="56px"
              color="white"
              fontSize="16px"
              lineHeight="24px"
            >
              Add
            </Button>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}
