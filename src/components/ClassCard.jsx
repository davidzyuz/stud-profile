import { Box, Divider } from "@chakra-ui/react";

export default function ClassCard() {
  return (
    <Box>
      {/* Class title, number of students. */}
      <Box>
        <h1>Class A</h1>
        <span>Students: 42</span>
        <button>-{">"}</button>
      </Box>
      {/* Two inputs with class name and Grade selection. */}
      <Box>
        <input type="text" placeholder="Class name" />
        <select>
          <option value="1">1st grade</option>
          <option value="2">2nd grade</option>
          <option value="3">3rd grade</option>
        </select>
      </Box>
      {/* Students table with name, last name, email and button to add new students */}
      <Box>
        <h3>English Skills Assessments</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
          nisl maximus, fringilla risus quis, ultricies lorem. Sed sed augue
          semper, lacinia ex eu, aliquet enim. Vivamus sollicitudin eros vitae
          massa imperdiet, eu gravida ligula tempus. Pellentesque velit lectus,
          gravida nec velit in, tincidunt lacinia nunc. 
        </p>
        <Divider />
        <h3>Allow Individual Advancement</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
          nisl maximus, fringilla risus quis, ultricies lorem. Sed sed augue
          semper, lacinia ex eu, aliquet enim.
        </p>
        <button>Switch Button</button>
      </Box>
      <Box>
        <h3>Final Assessment</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
          nisl maximus, fringilla risus quis, ultricies lorem. Sed sed augue
          semper, lacinia ex eu, aliquet enim.
        </p>
        <button>Switch Button</button>
        <Divider />
        <h3>ChooseDate</h3>
        {/* Datepicker */}
      </Box>
    </Box>
  );
}
