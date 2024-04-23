import { useState, useEffect } from "react";
import { Grid, GridItem, HStack, Heading, Select } from "@chakra-ui/react";
import ClassManagement from "../components/ClassManagement";
import ClassCard from "../components/ClassCard";

const initialClassCardProps = {
  id: 0,
  className: "Class A",
  grade: "",
  studentsCount: 0,
  studentsList: [],
  isIndividualAssessment: false,
  isFinalAssessment: false,
  assessmentDate: "", // Date format "YYYY-MM-DD"
};

export default function ClassSettings() {
  const [selectedClassId, setSelectedClassId] = useState(undefined);
  const [classList, setClassList] = useState([]);
  const [classCardProps, setClassCardProps] = useState({
    ...initialClassCardProps,
  });
  const [isClassCreate, setIsClassCreate] = useState(false);

  const handleClassIdSelection = (classId) => {
    setSelectedClassId(classId);
    setIsClassCreate(false);
  };

  const reset = () => {
    setIsClassCreate(false);
    setSelectedClassId(undefined);
  };

  const handleClassDeletion = (classId) => {
    const classes = localStorage.getItem("classes")
      ? JSON.parse(localStorage.getItem("classes"))
      : [];

    const updatedClasses = classes.filter((c) => c.id !== classId);

    localStorage.setItem("classes", JSON.stringify(updatedClasses));
    setClassList(updatedClasses);
    reset();
    alert("Class deleted successfully");
  };

  // Callback to handle the creation of a new class
  const handleIsClassCreate = () => {
    const classes = localStorage.getItem("classes")
      ? JSON.parse(localStorage.getItem("classes"))
      : [];
    const classId = classes.length + 1;

    setIsClassCreate(true);
    setClassCardProps({ ...initialClassCardProps, id: classId });
  };
  const handleClassCardProps = (classCardProp, classCardPropValue) => {
    setClassCardProps({
      ...classCardProps,
      [classCardProp]: classCardPropValue,
    });
  };

  // Load data from the local storage on component mount
  useEffect(() => {
    const classes = localStorage.getItem("classes")
      ? JSON.parse(localStorage.getItem("classes"))
      : [];

    setClassList(classes);
  }, [isClassCreate, classCardProps]);

  // Save data to the local storage on every classCardProps change
  useEffect(() => {
    const classes = localStorage.getItem("classes")
      ? JSON.parse(localStorage.getItem("classes"))
      : [];

    const classIndex = classes.findIndex((c) => c.id === classCardProps.id);

    if (classIndex === -1) {
      classes.push(classCardProps);
    } else {
      classes[classIndex] = classCardProps;
    }

    localStorage.setItem("classes", JSON.stringify(classes));
  }, [classCardProps]);

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
        maxHeight="90vh"
        borderRadius="20px"
        shadow="xl"
      >
        <ClassManagement
          handleIsClassCreate={handleIsClassCreate}
          handleClassIdSelection={handleClassIdSelection}
          classList={classList}
        />
      </GridItem>
      <GridItem colSpan={4} minHeight="100vh">
        {isClassCreate && (
          <ClassCard
            classCardProps={classCardProps}
            editMode={true}
            handleClassCardProps={handleClassCardProps}
          />
        )}
        {typeof selectedClassId !== "undefined" && !isClassCreate && (
          <ClassCard
            classCardProps={classList.find((c) => c.id === selectedClassId)}
            editMode={false}
            onCancelClick={reset}
            handleClassDeletion={handleClassDeletion}
            handleClassCardProps={handleClassCardProps}
          />
        )}
      </GridItem>
    </Grid>
  );
}
