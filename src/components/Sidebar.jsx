import {
  Box,
  Divider,
  Text,
  Heading,
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
  DownloadIcon,
} from "../ui/icons";

export default function Sidebar() {
  return (
    <VStack
      color="secondary"
      fontWeight={500}
      spacing="24px"
      padding="40px"
      align={"stretch"}
    >
      {/* Profile */}
      <VStack>
        <DefaultAvatar />
        <Heading color="black">Teacher Name</Heading>
        <Text>School Name, City Name</Text>
        {/* TODO: should be calculated */}
        <Text>
          Classes:{" "}
          <Text as="b" color="black">
            5{" "}
          </Text>{" "}
          | Students:{" "}
          <Text as="b" color="black">
            110
          </Text>
        </Text>
      </VStack>
      {/* Pages */}
      <VStack w="100%">
        <HStack padding="24px" w="100%">
          <Students />
          <ChakraLink as={ReactRouterLink} to="/my-students">
            My Students
          </ChakraLink>
        </HStack>
        <HStack backgroundColor="gray.200" padding="24px" w="100%">
          <ClassIcon />
          <ChakraLink as={ReactRouterLink} to="/">
            Class Settings
          </ChakraLink>
        </HStack>
        <HStack padding="24px" w="100%">
          <Games />
          <ChakraLink as={ReactRouterLink} to="/my-games">
            My Games
          </ChakraLink>
        </HStack>
      </VStack>
      <Divider />
      {/* Instructions */}
      <VStack>
        <Heading as="h3" size="sm" color="black" alignSelf="start">
          Getting Started
        </Heading>
        <HStack padding="16px" backgroundColor="gray.200" w="100%">
          <DownloadIcon />
          <Box>Download and view Teacher Instructions</Box>
        </HStack>
        <HStack padding="16px" backgroundColor="gray.200" w="100%">
          <DownloadIcon />
          <Box>Download and view Student Instructions</Box>
        </HStack>
      </VStack>
      {/* Help section */}
      <Box bg="#145C99" p="32px" borderRadius="26px" color="white">
        <Heading
          as="h3"
          size="sm"
          fontWeight={700}
          fontSize="26px"
          lineHeight="39px"
        >
          Need Help?
        </Heading>
        <Box top="-87px" float="right" pos="relative" width="30%">
          <ChatBuble />
        </Box>
        <Text
          as="p"
          mt="24px"
          mb="24px"
          fontWeight="400"
          fontSize="22px"
          lineHeight="33px"
        >
          Contact our team at Company Name with questions and concerns.
        </Text>

        <span>Contact Us {">"}</span>
      </Box>
      {/* Tips and Tricks */}
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
    </VStack>
  );
}
