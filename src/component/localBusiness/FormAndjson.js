import React from 'react';
import { Box } from '@mui/system';
import FormLocalBusiness from './FormLocalBusiness';
import ShowJsonCodeLocal from './ShowJsonCodeLocal';
import { Paper } from '@mui/material';
export default function FormAndjson() {
  return (
    <Box
      sx={{
        width: { lg: '80vw', xs: '40vw', md: '45vw' },
        display: 'flex',
        flexWrap: { lg: 'nowrap', xs: 'wrap-reverse', md: 'wrap-reverse' },
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
        <ShowJsonCodeLocal />
      </Paper>
      <Box>
        <FormLocalBusiness />
      </Box>
    </Box>
  );
}
