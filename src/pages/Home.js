import { Container, Paper } from '@mui/material';
import React, { useId } from 'react';
import SelectFields from '../component/SelectFields';

export default function Home() {
  const id = useId();
  const styleOption = {
    color: 'black',
    textDecoration: 'none',
    display: 'flex',
  };
  return (
    <Paper
      sx={{
        display: { xs: 'block', md: 'flex' },
        justifyContent: 'space-between',
        // width: '80vw',
        width: { lg: '80vw', xs: '40vw', md: '70vw' },
        margin: '30px auto',
        padding: 5,
      }}
    >
      <p
        style={{
          textAlign: 'justify',
          // width: { lg: '30vw', md: '10vw' },
          width: '35vw',
        }}
      >
        Use this Schema.org structured data generator to create JSON-LD markups,
        including all of the required item properties and more. Click on the
        Google icon to test your markup with the Structured Data Testing Tool
        and/or the Rich Results Test.
      </p>
      <SelectFields
        idInput={id}
        variantInput="standard"
        textLabel="Which Schema.org markup would you like to create?"
        styleSx={{
          width: '40vw',
          // width: { lg: '40vw', md: '10vw' },
          margin: 1,
        }}
        onChangeInput={(e) => console.log(e.target.value)}
      />
    </Paper>
  );
}
