import {
  Box,
  Wrap,
  WrapItem,
  Divider,
  Heading,
  Center,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { ChatBuble, TipsAndTricks, DefaultAvatar } from "../ui/icons";

export default function Sidebar() {
  return (
    <Box p={4}>
      {/* Profile */}
      <Flex direction="column" align="center">
        <DefaultAvatar />
        <span>Teacher Name</span>
        <span>School Name, City Name</span>
        {/* TODO: should be calculated */}
        <span>Classes: 5</span>
        <span>Students: 110</span>
      </Flex>
      {/* Pages */}
      <Flex direction="column" align="center">
        <ChakraLink as={ReactRouterLink} to="/my-students">
          My Students
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/">
          Class Settings
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/my-games">
          My Games
        </ChakraLink>
      </Flex>
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
        <TipsAndTricks />
      </Box>
    </Box>
  );
}
