import { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Text,
  HStack,
  Input,
  Select,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Button,
  Switch,
  Heading,
} from "@chakra-ui/react";
import { EditClass } from "../ui/icons";
import AddNewStudent from "./AddNewStudent";

export default function ClassCard() {
  const [showAddNewStudent, setShowAddNewStudent] = useState(false);
  const handleAddNewStudent = () => setShowAddNewStudent(!showAddNewStudent);

  useEffect(() => {
    if (showAddNewStudent) {
      // Scroll to top before disabling scroll.
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showAddNewStudent]);

  return (
    <Box padding="40px">
      {/* Class title, number of students. */}
      <Box>
        <HStack justify="space-between" width="100%">
          <Heading as="h1" fontSize="32px" fontWeight="700">
            Class A
          </Heading>
          <EditClass />
        </HStack>
        <HStack>
          <Text>
            Grade: <b>1st</b> |
          </Text>
          <Text>
            {" "}
            Students: <b>42</b>
          </Text>
        </HStack>
      </Box>
      {/* Two inputs with class name and Grade selection. */}
      <HStack bg="#f5f5f5" borderRadius="20px" padding="32px" mt="32px">
        <Box w="100%">
          <Text>Class Name</Text>
          <Input placeholder="A" />
        </Box>
        <Box w="100%">
          <Text>Grade</Text>
          <Select>
            <option value="1">1st grade</option>
            <option value="2">2nd grade</option>
            <option value="3">3rd grade</option>
          </Select>
        </Box>
      </HStack>
      {/* Table */}
      <Box bg="#f5f5f5" borderRadius="20px" padding="32px" mt="32px">
        <HStack w="100%" justify="space-between">
          <Text as="h3" fontSize="18px" fontWeight="700">
            Students
          </Text>
          <Button variant="link" color="#145C99" onClick={handleAddNewStudent}>
            Add New Student
          </Button>
        </HStack>
        <TableContainer overflowY="scroll" height="276px">
          <Table size="sm" variant="simple">
            <Thead>
              <Tr>
                <Th pl="0">First Name</Th>
                <Th pl="0">Last Name</Th>
                <Th pl="0">Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td pl="0">Lorem</Td>
                <Td pl="0">Ipsum</Td>
                <Td pl="0">Student@email.com</Td>
              </Tr>
              <Tr>
                <Td pl="0">Lorem</Td>
                <Td pl="0">Ipsum</Td>
                <Td pl="0">Student@email.com</Td>
              </Tr>
              <Tr>
                <Td pl="0">Lorem</Td>
                <Td pl="0">Ipsum</Td>
                <Td pl="0">Student@email.com</Td>
              </Tr>
              <Tr>
                <Td pl="0">Lorem</Td>
                <Td pl="0">Ipsum</Td>
                <Td pl="0">Student@email.com</Td>
              </Tr>
              <Tr>
                <Td pl="0">Lorem</Td>
                <Td pl="0">Ipsum</Td>
                <Td pl="0">Student@email.com</Td>
              </Tr>
              <Tr>
                <Td pl="0">Lorem</Td>
                <Td pl="0">Ipsum</Td>
                <Td pl="0">Student@email.com</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      {/* Info */}
      <Box bg="#f5f5f5" borderRadius="20px" padding="32px" mt="32px">
        <h3>English Skills Assessments</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
          nisl maximus, fringilla risus quis, ultricies lorem. Sed sed augue
          semper, lacinia ex eu, aliquet enim. Vivamus sollicitudin eros vitae
          massa imperdiet, eu gravida ligula tempus. Pellentesque velit lectus,
          gravida nec velit in, tincidunt lacinia nunc. 
        </p>
        <Divider margin="32px 0" />
        <HStack>
          <Box>
            <h3>Allow Individual Advancement</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis nisl maximus, fringilla risus quis, ultricies lorem. Sed sed
              augue semper, lacinia ex eu, aliquet enim.
            </p>
          </Box>
          <Box alignSelf="flex-start">
            <Switch colorScheme="green" size="lg" isChecked />
          </Box>
        </HStack>
      </Box>
      {/* Final Assessment */}
      <Box bg="#f5f5f5" borderRadius="20px" padding="32px" mt="32px">
        <HStack>
          <Box>
            <h3>Final Assessment</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis nisl maximus, fringilla risus quis, ultricies lorem. Sed sed
              augue semper, lacinia ex eu, aliquet enim.
            </p>
          </Box>
          <Box alignSelf="flex-start">
            <Switch colorScheme="green" size="lg" isChecked />
          </Box>
        </HStack>
        <Divider margin="32px 0" />
        {/* Datepicker */}
        <Text>Choose Date</Text>
        <Input type="date" size="md" value="2024-12-24" />
      </Box>
      {/* Add new student */}
      {showAddNewStudent && (
        <AddNewStudent onAddNewStudent={handleAddNewStudent} />
      )}
    </Box>
  );
}
