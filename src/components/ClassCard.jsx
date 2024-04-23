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

const options = [
  { value: "1", label: "1st" },
  { value: "2", label: "2nd" },
  { value: "3", label: "3rd" },
  { value: "4", label: "4th" },
  { value: "5", label: "5th" },
  { value: "6", label: "6th" },
  { value: "7", label: "7th" },
  { value: "8", label: "8th" },
  { value: "9", label: "9th" },
  { value: "10", label: "10th" },
  { value: "11", label: "11th" },
  { value: "12", label: "12th" },
];

function StudentsTable({ studentsList }) {
  return (
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
          {studentsList.map((student) => (
            <Tr key={student.id}>
              <Td pl="0">{student.firstName}</Td>
              <Td pl="0">{student.lastName}</Td>
              <Td pl="0">{student.email}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default function ClassCard({
  classCardProps,
  handleClassCardProps,
  editMode = false,
}) {
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
            {classCardProps.className}
          </Heading>
          <EditClass />
        </HStack>
        <HStack>
          <Text>
            Grade: <b>{classCardProps.grade}</b> |
          </Text>
          <Text>
            {" "}
            Students: <b>{classCardProps.studentsCount}</b>
          </Text>
        </HStack>
      </Box>
      {/* Two inputs with class name and Grade selection. */}
      <HStack bg="#f5f5f5" borderRadius="20px" padding="32px" mt="32px">
        <Box w="100%">
          <Text>Class Name</Text>
          <Input
            placeholder={"Class Name"}
            value={classCardProps.className}
            disabled={!editMode}
            onChange={(e) => handleClassCardProps("className", e.target.value)}
          />
        </Box>
        <Box w="100%">
          <Text>Grade</Text>
          <Select
            disabled={!editMode}
            value={classCardProps.grade}
            onChange={(e) => handleClassCardProps("grade", e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
        <StudentsTable studentsList={classCardProps.studentsList} />
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
            <Switch
              colorScheme="green"
              size="lg"
              isChecked={classCardProps.isIndividualAssessment}
              onChange={(e) =>
                handleClassCardProps("isIndividualAssessment", e.target.checked)
              }
            />
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
            <Switch
              colorScheme="green"
              size="lg"
              isChecked={classCardProps.isFinalAssessment}
              onChange={(e) =>
                handleClassCardProps("isFinalAssessment", e.target.checked)
              }
            />
          </Box>
        </HStack>
        <Divider margin="32px 0" />
        {/* Datepicker */}
        <Text>Choose Date</Text>
        <Input
          type="date"
          size="md"
          value={classCardProps.assessmentDate}
          onChange={(e) =>
            handleClassCardProps("assessmentDate", e.target.value)
          }
        />
      </Box>
      {/* Add new student */}
      {showAddNewStudent && (
        <AddNewStudent
          onAddNewStudent={handleAddNewStudent}
          classCardProps={classCardProps}
          handleClassCardProps={handleClassCardProps}
        />
      )}
    </Box>
  );
}
