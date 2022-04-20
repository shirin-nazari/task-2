import React from 'react';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';

import FormWebSite from './FormWebSite';
import ShowJsonCodeWebSite from './ShowJsonCodeWebSite';
export default function FormAndJson() {
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
          margin: 4,
          padding: 4,
        }}
      >
        <ShowJsonCodeWebSite />
      </Paper>
      <Box>
        <FormWebSite />
      </Box>
    </Box>
  );
}
