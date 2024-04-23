import { useState, useEffect } from "react";
import { Flex, VStack, HStack, Text, Button } from "@chakra-ui/react";
import { ArrowRight } from "../ui/icons";

export default function ClassManagement({ handleIsClassCreate }) {
  const properties = {
    grade: "1st grade's",
  };

  return (
    <>
      <VStack padding="24px 16px">
        <HStack w="100%" justify="space-between">
          <Text as="h3" fontSize="18px" fontWeight="700">
            {properties.grade}
          </Text>
          <Button variant="link" color="#145C99" onClick={handleIsClassCreate}>
            Create new class
          </Button>
        </HStack>
        <Flex width="100%" justify="space-between">
          <Flex direction="column">
            <Text as="h1">Class A</Text>
            <Text>Students: 42</Text>
          </Flex>
          <ArrowRight />
        </Flex>
      </VStack>
    </>
  );
}
