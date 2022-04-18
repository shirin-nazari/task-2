import React from 'react';
import { Box } from '@mui/system';

import ShowJsonCodeQuestion from './ShowJsonCodeQuestion';
import FormQuestion from './FormQuestion';
import { Paper } from '@mui/material';
export default function FormAndjson() {
  return (
    <Box
      sx={{
        width: { lg: '80vw', xs: '40vw', md: '45vw' },
        display: 'flex',
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          width: '30vw',
          display: 'flex',
          flexDirection: 'column',

          margin: 4,
          padding: 4,
        }}
      >
        <ShowJsonCodeQuestion />
      </Paper>
      <Box>
        <FormQuestion />
      </Box>
    </Box>
  );
}
