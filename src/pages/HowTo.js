import React from 'react';
import { Paper, Typography } from '@mui/material';

import { Box } from '@mui/system';
import FormAndjson from '../component/howTo/FormAndjson';

import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
export default function HowTo() {
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
          HowTo
        </Typography>
        <FormatListNumberedIcon sx={{ fontSize: '40px', paddingRight: 1 }} />
      </Box>

      <Box>
        <FormAndjson />
      </Box>
    </Paper>
  );
}
