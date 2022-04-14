import { Container, Paper } from '@mui/material';
import React, { useId } from 'react';
import SelectFields from '../component/SelectFields';

export default function Home() {
  const id = useId();
  return (
    <Paper
      sx={{ display: 'flex', width: '80vw', margin: '30px auto', padding: 5 }}
    >
      <div>
        Use this Schema.org structured data generator to create JSON-LD markups,
        including all of the required item properties and more. Click on the
        Google icon to test your markup with the Structured Data Testing Tool
        and/or the Rich Results Test.
      </div>
      <SelectFields
        // labelInput="Apjfkkjfdkjdjksalkljk"
        idInput={id}
        // inputLabelId={id}
        variantInput="standard"
        textLabel="age"
        styleSx={{ width: '70vw', margin: 1 }}
        onChangeInput={(e) => console.log(e.target.value)}
      />
    </Paper>
  );
}
