import { Paper, Typography } from '@mui/material';
import React, { useState } from 'react';

import { Box } from '@mui/system';

import Recipet from '@mui/icons-material/Receipt';
import FormRecipe from '../component/recipe/FormRecipe';
import ShowJsonCodeRecipe from '../component/recipe/ShowJsonCodeRecipe';
import FormAndjson from '../component/recipe/FormAndjson';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, copyData } from '../redux/features/slice/getDataSlice';

export default function Recips() {
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
  console.log(data);
  const dispatch = useDispatch();
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
          borderBottom: '1px solid #DFDFDF',
          paddingBottom: 2,
          width: { lg: '80vw', xs: '40vw', md: '45vw' },
        }}
      >
        <Box>
          <DeleteIcon onClick={(e) => dispatch(deleteData(data))} />
          <ContentCopyIcon onClick={() => dispatch(copyData(data.data))} />{' '}
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
            Recipet
          </Typography>
          <Recipet sx={{ fontSize: '40px', paddingRight: 1 }} />
        </Box>
      </Box>

      <Box>
        <FormAndjson />
      </Box>
    </Paper>
  );
}
