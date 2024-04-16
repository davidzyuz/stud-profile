import { Box, Wrap, WrapItem, Avatar, Divider, Heading } from "@chakra-ui/react";
// TODO: change icon imports
import ChatBuble from "../ui/icons/ChatBuble";
import TipsAndTricks from "../ui/icons/TipsAndTricks";

export default function Sidebar() {
  return (
    <Box as="aside" w="250px" h="100vh" bg="gray.800" color="white" p={4}>
      <Wrap>
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <span>Teacher Name</span>
          <span>School Name, City Name</span>
          {/* TODO: should be calculated */}
          <span>Classes: 5</span>
          <span>Students: 110</span>
        </WrapItem>
      </Wrap>
      {/* Pages */}
      <Box>
        <span>My Students</span>
        <span>Class Settings</span>
        <span>My Games</span>
      </Box>
      <Divider />
      <Box>
        <Heading as="h3" size="sm">
          Getting Started
        </Heading>
        <span>Download and view Teacher Instructions</span>
        <span>Download and view Student Instructions</span>
      </Box>
      <Box>
        <Heading as="h3" size="sm">
          Need Help?
        </Heading>
        <span>
          Contact our team at Company Name with questions and concerns.
        </span>
        <ChatBuble />
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
