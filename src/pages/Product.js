import { Paper, Typography } from '@mui/material';
import React, { useId, useState } from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Box } from '@mui/system';
import TextFields from '../component/TextFields';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FormProduct from '../component/FormProduct';
import ShowJsonCodeProduct from '../component/ShowJsonCodeProduct';

export default function Product() {
  return (
    <Paper
      sx={{
        display: { xs: 'block', md: 'flex', lg: 'flex' },
        justifyContent: 'space-between',
        // width: '80vw',
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
        <Box>
          <FormProduct />
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
        <ShowJsonCodeProduct />
      </Box>
    </Paper>
  );
}
