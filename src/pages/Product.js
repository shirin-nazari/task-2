import { Paper, Typography } from '@mui/material';
import React from 'react';

import { Box } from '@mui/system';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FormProduct from '../component/product/FormProduct';
import ShowJsonCodeProduct from '../component/product/ShowJsonCodeProduct';
import FormAndjson from '../component/product/FormAndjson';

export default function Product() {
  return (
    <Paper
      sx={{
        display: { xs: 'block', md: 'flex', lg: 'flex' },
        justifyContent: 'space-between',
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
            width: { lg: '50vw', xs: '40vw', md: '45vw' },
          }}
        >
          <LocalOfferIcon sx={{ fontSize: '40px', paddingRight: 1 }} />
          <Typography variant="h4" component="h1">
            Product
          </Typography>
        </Box>
      </Box>
      <Box>
        <FormAndjson />
      </Box>
    </Paper>
  );
}
