import { Paper } from '@mui/material';
import React from 'react';
import FormVideo from './FormVideo';
import ShowJsonCodeVideo from './ShowJsonCodeVideo';
import { Box } from '@mui/system';

export default function FormAndJson() {
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
        <ShowJsonCodeVideo />
      </Paper>
      <Box>
        <FormVideo />
      </Box>
    </Box>
  );
}
