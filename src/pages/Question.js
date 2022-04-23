import React, { useState } from 'react';
import { Paper, Typography } from '@mui/material';

import { Box } from '@mui/system';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import FormAndjson from '../component/question/FormAndjson';
export default function FAQ() {
  return (
    <Paper
      sx={{
        display: { xs: 'block', md: 'flex', lg: 'flex' },
        flexDirection: 'column',
        width: { lg: '80vw', xs: '40vw', md: '70vw' },
        margin: '30px auto',
        padding: 5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          borderBottom: '1px solid #DFDFDF',
          paddingBottom: 2,
          width: { lg: '80vw', xs: '40vw', md: '45vw' },
        }}
      >
        <Typography variant="h4" component="h1">
          FAQ Page
        </Typography>
        <HelpOutlineIcon sx={{ fontSize: '40px', paddingRight: 1 }} />
      </Box>

      <Box>
        <FormAndjson />
      </Box>
    </Paper>
  );
}
