import React from 'react';
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
      <Box>
        <Box
          sx={{
            display: 'flex',
            borderBottom: '1px solid #DFDFDF',
            paddingBottom: 2,
            width: { lg: '80vw', xs: '40vw', md: '45vw' },
          }}
        >
          <HelpOutlineIcon sx={{ fontSize: '40px', paddingRight: 1 }} />
          <Typography variant="h4" component="h1">
            FAQ Page
          </Typography>
        </Box>
      </Box>
      <Box>
        <FormAndjson />
      </Box>
    </Paper>
  );
}
