import { Paper, Typography } from '@mui/material';
import React, { useId, useState } from 'react';
import { Box } from '@mui/system';

import LanguageIcon from '@mui/icons-material/Language';
import FormWebSite from '../component/webSite/FormWebSite';
import ShowJsonCodeWebSite from '../component/webSite/ShowJsonCodeWebSite';
import FormAndJson from '../component/webSite/FormAndJson';

export default function Website() {
  const id = useId();
  return (
    <Paper
      sx={{
        display: { xs: 'block', md: 'flex', lg: 'flex' },
        justifyContent: 'space-between',
        // width: '80vw',
        flexDirection: 'column',
        width: { lg: '80vw', xs: '40vw', md: '45vw' },
        margin: '30px auto',
        padding: 5,
      }}
    >
      <Box
        sx={{
          width: { lg: '80vw', xs: '40vw', md: '45vw' },
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
      <FormAndJson />
    </Paper>
  );
}
