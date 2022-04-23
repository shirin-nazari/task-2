import { Paper } from '@mui/material';
import React, { useId } from 'react';
import SelectFields from '../component/SelectFields';

export default function Home() {
  const id = useId();

  return (
    <Paper
      sx={{
        display: { xs: 'block', md: 'flex' },
        justifyContent: 'space-between',
        width: { lg: '80vw', xs: '40vw', md: '70vw' },
        margin: '30px auto',
        padding: 5,
      }}
    >
      <p
        style={{
          textAlign: 'justify',
          width: '35vw',
        }}
      >
        Use this Schema.org structured data generator to create JSON-LD markups,
        including all of the required item properties and more. Click on the
        Google icon to test your markup with the Structured Data Testing Tool
        and/or the Rich Results Test.
      </p>
      <SelectFields
        dir="rtl"
        idInput={id}
        variantInput="standard"
        textLabel="از موارد زیر برای ساخت اسکیما انتخاب کنید"
        styleSx={{
          width: '40vw',
          margin: 1,
          float: 'right',
        }}
        onChangeInput={(e) => console.log(e.target.value)}
      />
    </Paper>
  );
}
