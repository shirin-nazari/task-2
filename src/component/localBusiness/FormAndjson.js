import React from 'react';
import { Box } from '@mui/system';
import FormLocalBusiness from './FormLocalBusiness';
import ShowJsonCodeRecipe from './ShowJsonCodeRecipe';
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
        <ShowJsonCodeRecipe />
      </Paper>
      <Box>
        <FormLocalBusiness />
      </Box>
    </Box>
  );
}
