import { Paper, Typography } from '@mui/material';
import React, { useId, useState } from 'react';
import { Box } from '@mui/system';

import LanguageIcon from '@mui/icons-material/Language';
import FormWebSite from '../component/webSite/FormWebSite';
import ShowJsonCodeWebSite from '../component/webSite/ShowJsonCodeWebSite';

export default function Website() {
  const id = useId();
  return (
    <Paper
      sx={{
        display: { xs: 'block', md: 'flex', lg: 'flex' },
        justifyContent: 'space-between',
        // width: '80vw',
        width: { lg: '80vw', xs: '40vw', md: '45vw' },
        margin: '30px auto',
        padding: 5,
      }}
    >
      <Box>
        <Box
          sx={{
            width: { lg: '50vw', xs: '40vw', md: '45vw' },
            display: 'flex',
            borderBottom: '1px solid #DFDFDF',
            paddingBottom: 2,
            // width: '80vw',
          }}
        >
          <LanguageIcon sx={{ fontSize: '40px', paddingRight: 1 }} />
          <Typography variant="h4" component="h1">
            Website
          </Typography>
        </Box>
        <Box>
          <FormWebSite />
        </Box>
      </Box>
      <Box
        sx={{
          width: '30vw',
          display: 'flex',
          flexDirection: 'column',
          // marginRight: 50,
          // marginTop: 8,
        }}
      >
        <ShowJsonCodeWebSite />
      </Box>
    </Paper>
  );
}
