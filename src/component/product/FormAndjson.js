import { Paper } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import ShowJsonCodeProduct from './ShowJsonCodeProduct';
import FormProduct from './FormProduct';

export default function FormAndjson() {
  return (
    <Box
      sx={{
        width: { lg: '80vw', xs: '40vw', md: '45vw' },
        display: 'flex',
      }}
    >
      <Paper
        sx={{
          width: '30vw',
          display: 'flex',
          flexDirection: 'column',
          margin: 4,
          padding: 4,
        }}
      >
        <ShowJsonCodeProduct />
      </Paper>
      <Box>
        <FormProduct />
      </Box>
    </Box>
  );
}