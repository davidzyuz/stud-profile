import { Flex, VStack, HStack, Text, Button } from "@chakra-ui/react";
import { ArrowRight } from "../ui/icons";

export default function ClassManagement({ handleIsClassCreate, classList }) {
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
        {[...classList].reverse().map((classItem) => (
          <Flex width="100%" justify="space-between" key={classItem.id}>
            <VStack>
              <Text as="h1">{classItem.className}</Text>
              <Text>Students: {classItem.studentsList.length}</Text>
            </VStack>
            <ArrowRight />
          </Flex>
        ))}
      </VStack>
    </>
  );
}
