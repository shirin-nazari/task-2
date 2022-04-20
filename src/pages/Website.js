import { Paper, Typography } from '@mui/material';
import React, { useId, useState } from 'react';
import { Box } from '@mui/system';

import LanguageIcon from '@mui/icons-material/Language';
import FormWebSite from '../component/webSite/FormWebSite';
import ShowJsonCodeWebSite from '../component/webSite/ShowJsonCodeWebSite';
import FormAndJson from '../component/webSite/FormAndJson';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, copyData } from '../redux/features/slice/getDataSlice';
export default function Website() {
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
            Website
          </Typography>{' '}
          <LanguageIcon sx={{ fontSize: '40px', paddingRight: 1 }} />
        </Box>
      </Box>
      <Box>
        <FormAndJson />
      </Box>
    </Paper>
  );
}
