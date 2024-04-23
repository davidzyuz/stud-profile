import { useState } from "react";
import { Grid, GridItem, HStack, Heading, Select } from "@chakra-ui/react";
import ClassManagement from "../components/ClassManagement";
import ClassCard from "../components/ClassCard";

const initialClassCardProps = {
  className: "Class",
  grade: "",
  studentsCount: 0,
  studentsList: [],
  isIndividualAssessment: false,
  isFinalAssessment: false,
  assessmentDate: "", // Date format "YYYY-MM-DD"
};

export default function ClassSettings() {
  const [classCardProps, setClassCardProps] = useState({
    ...initialClassCardProps,
  });
  const [isClassCreate, setIsClassCreate] = useState(false);
  const handleIsClassCreate = () => setIsClassCreate(!isClassCreate);
  const handleClassCardProps = (newClassCardProps) => {};
  // const classCardProps = {
  //   className: "Class A",
  //   grade: "1st",
  //   studentsCount: 42,
  //   studentsList: [
  //     {
  //       id: 1,
  //       firstName: "Lorem",
  //       lastName: "Ipsum",
  //       email: "Student@email.com",
  //     },
  //     {
  //       id: 2,
  //       firstName: "Lorem",
  //       lastName: "Ipsum",
  //       email: "Student@email.com",
  //     },
  //   ],
  //   isIndividualAssessment: true,
  //   isFinalAssessment: true,
  //   assessmentDate: "2024-12-24",
  // };

  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      gap={6}
      bg="grey.50"
      m="10px"
      mt="90px"
      pr="45px"
    >
      <GridItem colSpan={6}>
        <HStack justify="space-between">
          <Heading as="h1" fontSize="32px" fontWeight="700">
            Class Settings
          </Heading>
          <Select
            variant="outline"
            width="150px"
            placeholder="Grade:"
            defaultChecked="1st"
          >
            <option>1st</option>
            <option>2st</option>
            <option>3st</option>
          </Select>
        </HStack>
      </GridItem>
      <GridItem
        colSpan={2}
        bg="white"
        minHeight="100vh"
        borderRadius="26px"
        shadow="xl"
      >
        <ClassManagement handleIsClassCreate={handleIsClassCreate} />
      </GridItem>
      <GridItem colSpan={4} minHeight="100vh" borderRadius="26px" shadow="xl">
        {isClassCreate && (
          <ClassCard
            classCardProps={{ ...initialClassCardProps }}
            editMode={true}
            handleClassCardProps={handleClassCardProps}
          />
        )}
      </GridItem>
    </Grid>
  );
}
