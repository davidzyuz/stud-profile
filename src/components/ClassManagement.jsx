import { Box } from "@chakra-ui/react";

export default function ClassManagement() {
  const props = {
    grade: "1st grade's",
  };

  return (
    <Box>
      <Box>
        <h1>{props.grade}</h1>
        <button>Create new class</button>
      </Box>
      <Box>
        <h1>Class A</h1>
        <span>Students: 42</span>
        <button>-{">"}</button>
      </Box>
      <Box>
        <h1>Class B</h1>
        <span>Students: 42</span>
        <button>-{">"}</button>
      </Box>
      <Box>
        <h1>Class C</h1>
        <span>Students: 42</span>
        <button>-{">"}</button>
      </Box>
      <Box>
        <h1>Class D</h1>
        <span>Students: 42</span>
        <button>-{">"}</button>
      </Box>
      <Box>
        <h1>Class E</h1>
        <span>Students: 42</span>
        <button>-{">"}</button>
      </Box>
    </Box>
  );
}
