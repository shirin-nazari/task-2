import { Paper, Typography } from '@mui/material';
import React, { useState } from 'react';

import { Box } from '@mui/system';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FormProduct from '../component/product/FormProduct';
import ShowJsonCodeProduct from '../component/product/ShowJsonCodeProduct';
import FormAndjson from '../component/product/FormAndjson';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteData,
  copyData,
  passData,
} from '../redux/features/slice/getDataSlice';

export default function Product() {
  const [copySuccess, setCopySuccess] = useState('');
  // const copyToClipBoard = async (copyMe) => {
  //   try {
  //     await navigator.clipboard.writeText(copyMe);
  //     setCopySuccess('Copied!');
  //   } catch (err) {
  //     setCopySuccess('Failed to copy!');
  //   }
  // };
  const data = useSelector((state) => state.data);
  console.log(data.data);
  const dispatch = useDispatch();
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
      <Box
        sx={{
          display: 'flex',
          borderBottom: '1px solid #DFDFDF',
          paddingBottom: 2,
          width: { lg: '80vw', xs: '40vw', md: '45vw' },
        }}
      >
        <Box>
          <DeleteIcon onClick={(e) => dispatch(deleteData(data))} />
          <ContentCopyIcon
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(data.data));
            }}
          />{' '}
          {copySuccess}
          <GoogleIcon />
        </Box>

        {/* copyToClipBoard(data.data) */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingBottom: 2,
            width: { lg: '70vw', xs: '40vw', md: '45vw' },
          }}
        >
          <Typography variant="h4" component="h1">
            Product
          </Typography>
          <LocalOfferIcon sx={{ fontSize: '40px', paddingRight: 1 }} />
        </Box>
      </Box>

      <Box>
        <FormAndjson />
      </Box>
    </Paper>
  );
}
