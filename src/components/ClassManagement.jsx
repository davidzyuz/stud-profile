import { Flex, VStack, HStack, Text, Button } from "@chakra-ui/react";
import { ArrowRight } from "../ui/icons";

export default function ClassManagement({
  handleIsClassCreate,
  handleClassIdSelection,
  classList,
}) {
  // TODO: Implement filter by grade
  const properties = {
    grade: "1st grade's",
  };

  return (
    <>
      <VStack maxH="90vh" overflowY="scroll">
        <HStack w="100%" justify="space-between" m="16px" p="24px">
          <Text as="h3" fontSize="18px" fontWeight="700">
            {properties.grade}
          </Text>
          <Button variant="link" color="#145C99" onClick={handleIsClassCreate}>
            Create new class
          </Button>
        </HStack>
        {/* Reverse class list that newly added classes appear at the top of the list */}
        {[...classList].reverse().map((classItem, ind) => (
          <Flex
            p="24px"
            width="100%"
            justify="space-between"
            borderBottom={
              classList.length - ind > 1 ? "1px solid #E5E5E5" : "none"
            }
            _hover={{
              backgroundColor: "#f2f2f2",
              cursor: "pointer",
            }}
            key={classItem.id}
            onClick={() => handleClassIdSelection(classItem.id)}
          >
            <VStack align="flex-start">
              <Text
                as="h3"
                fontWeight="500"
                fontSize="18px"
                lineHeight="27px"
                color="#082638"
              >
                {classItem.className}
              </Text>
              <Text
                fontSize="14px"
                lineHeight="21px"
                fontWeight="500"
                color="rgba(8, 38, 63, 0.4)"
              >
                Students: {classItem.studentsList.length}
              </Text>
            </VStack>
            <ArrowRight />
          </Flex>
        ))}
      </VStack>
    </>
  );
}
