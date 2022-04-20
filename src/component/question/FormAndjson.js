import React, { useState } from 'react';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GoogleIcon from '@mui/icons-material/Google';
import { deleteData, copyData } from '../../redux/features/slice/getDataSlice';
import ShowJsonCodeQuestion from './ShowJsonCodeQuestion';
import FormQuestion from './FormQuestion';
import { Alert, Button, IconButton, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

export default function FormAndjson() {
  const [copySuccess, setCopySuccess] = useState('');

  const data = useSelector((state) => state.data);
  const [open, setOpen] = useState(true);
  const [addInput, setAddInput] = useState(false);
  console.log(data);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: { lg: '80vw', xs: '40vw', md: '45vw' },
        display: 'flex',
        flexWrap: { lg: 'nowrap', xs: 'wrap-reverse', md: 'wrap-reverse' },
      }}
    >
      <Box>
        <Box
          dir="rtl"
          sx={{
            margin: 4,
            padding: 4,
            width: '30vw',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            size="large"
            sx={{
              width: '9vw',
              display: 'flex',
              justifyContent: 'space-around',
            }}
            variant="contained"
            onClick={(e) => dispatch(deleteData(data))}
          >
            {' '}
            <DeleteIcon />
            حذف
          </Button>
          <Button
            sx={{
              width: '9vw',
              display: 'flex',
              justifyContent: 'space-around',
            }}
            size="large"
            variant="contained"
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(data.data));
              setCopySuccess(true);
              setOpen(true);
            }}
          >
            <ContentCopyIcon />
            کپی
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              width: '9vw',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            {' '}
            <GoogleIcon />
            آزمایش
          </Button>
        </Box>
        <Paper
          variant="outlined"
          sx={{
            width: '30vw',
            display: 'flex',
            flexDirection: 'column',
            margin: { lg: 4, xs: 0, md: 0 },
            padding: 4,
          }}
        >
          <ShowJsonCodeQuestion />
        </Paper>
      </Box>

      <Box>
        <FormQuestion />
        <Button
          size="large"
          variant="contained"
          onClick={() => setAddInput(true)}
        >
          اضافه کردن سوال
        </Button>
        {addInput && (
          <Collapse in={addInput}>
            <FormQuestion />
          </Collapse>
        )}
        {copySuccess && (
          <Collapse in={open}>
            <Alert
              severity="success"
              sx={{ width: '30vw' }}
              action={
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              copied to clipboard (:
            </Alert>
          </Collapse>
        )}
      </Box>
    </Box>
  );
}
