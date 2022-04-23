import React from 'react';

import { Box } from '@mui/system';
import { Paper, Typography } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FormAndjson from '../component/product/FormAndjson';

export default function Product() {
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
          Product
        </Typography>
        <LocalOfferIcon sx={{ fontSize: '40px', paddingRight: 1 }} />
      </Box>

      <Box>
        <FormAndjson />
      </Box>
    </Paper>
  );
}
