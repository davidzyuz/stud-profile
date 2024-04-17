import {
  Box,
  Divider,
  Text,
  Heading,
  Flex,
  VStack,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  ChatBuble,
  TipsAndTricks,
  DefaultAvatar,
  ClassIcon,
  Games,
  Students,
} from "../ui/icons";

export default function Sidebar() {
  return (
    <Box p={4}>
      {/* Profile */}
      <Flex direction="column" align="center">
        <DefaultAvatar />
        <Heading>Teacher Name</Heading>
        <Text color="secondary">School Name, City Name</Text>
        {/* TODO: should be calculated */}
        <Text color="secondary">
          Classes:{" "}
          <Text as="b" color="black">
            5{" "}
          </Text>{" "}
          | Students:{" "}
          <Text as="b" color="black">
            110
          </Text>
        </Text>
      </Flex>
      {/* Pages */}
      <VStack
        color="secondary"
        fontWeight={500}
        spacing="6px"
        padding="24px"
        align={"stretch"}
      >
        <HStack padding="24px">
          <Students />
          <ChakraLink as={ReactRouterLink} to="/my-students">
            My Students
          </ChakraLink>
        </HStack>
        <HStack backgroundColor="gray.200" padding="24px">
          <ClassIcon />
          <ChakraLink as={ReactRouterLink} to="/">
            Class Settings
          </ChakraLink>
        </HStack>
        <HStack padding="24px">
          <Games />
          <ChakraLink as={ReactRouterLink} to="/my-games">
            My Games
          </ChakraLink>
        </HStack>
      </VStack>
      <Divider />
      <Box>
        <Heading as="h3" size="sm">
          Getting Started
        </Heading>
        <Box>Download and view Teacher Instructions</Box>
        <Box>Download and view Student Instructions</Box>
      </Box>
      <Box bg="#145C99" p="32px" borderRadius="26px">
        <Heading as="h3" size="sm">
          Need Help?
        </Heading>
        <Box top="-87px" float="right" pos="relative" width="30%">
          <ChatBuble />
        </Box>
        <p>Contact our team at Company Name with questions and concerns.</p>

        <span>Contact Us {">"}</span>
      </Box>
      <Box>
        <Heading as="h3" size="sm">
          Tips and Tricks
        </Heading>
        <span>
          By clicking on the student’s name, you’ll see how they are performing
          in each skill and how often they use the app . You can also decide
          which interface language they should use.
        </span>
        <Box width="100px">
          <TipsAndTricks />
        </Box>
      </Box>
    </Box>
  );
}
