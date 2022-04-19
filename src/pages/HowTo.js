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
      <Box>
        <Box
          sx={{
            display: 'flex',
            borderBottom: '1px solid #DFDFDF',
            paddingBottom: 2,
            width: { lg: '80vw', xs: '40vw', md: '45vw' },
          }}
        >
          <FormatListNumberedIcon sx={{ fontSize: '40px', paddingRight: 1 }} />
          <Typography variant="h4" component="h1">
            HowTo
          </Typography>
        </Box>
      </Box>
      <Box>
        <FormAndjson />
      </Box>
    </Paper>
  );
}
