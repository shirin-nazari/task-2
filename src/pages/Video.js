import { Paper, Typography } from '@mui/material';
import React from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Box } from '@mui/system';

import FormVideo from '../component/FormVideo';
import ShowJsonCodeVideo from '../component/ShowJsonCodeVideo';

export default function Video() {
  // use id

  return (
    <Paper
      sx={{
        display: { xs: 'block', md: 'flex', lg: 'flex' },
        // justifyContent: 'space-between',
        width: { lg: '80vw', xs: '40vw', md: '70vw' },
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
          }}
        >
          <VideocamIcon sx={{ fontSize: '40px', paddingRight: 1 }} />
          <Typography variant="h4" component="h1">
            Video
          </Typography>
        </Box>
        <Box>
          <FormVideo />
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
        <ShowJsonCodeVideo />
      </Box>
    </Paper>
  );
}
