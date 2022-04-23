import React, { useState } from 'react';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GoogleIcon from '@mui/icons-material/Google';
import { deleteData, copyData } from '../../redux/features/slice/getDataSlice';
import ShowJsonCode from '../ShowJsonCode';
import FormQuestion from './FormQuestion';
import { Alert, Button, IconButton, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function FormAndjson() {
  const [copySuccess, setCopySuccess] = useState('');
  const data = useSelector((state) => state.data);
  const [opened, setOpened] = useState(true);
  const [addInput, setAddInput] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // console.log(data);
  const copyText = `<script type="application/ld+json">
  ${JSON.stringify(data.data)}
  </script>
`;
  const dispatch = useDispatch();
  const initialDataQuestion = {
    question: '',
    answer: '',
  };
  const initialDataRemove = {
    name: '',
    description: '',
  };
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
            onClick={(e) => {
              dispatch(deleteData(initialDataRemove));
              // dispatch(deleteData(data));
            }}
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
              navigator.clipboard.writeText(copyText);
              setCopySuccess(true);
              setOpened(true);
            }}
          >
            <ContentCopyIcon />
            کپی
          </Button>

          <Button
            variant="contained"
            aria-describedby={id}
            size="large"
            sx={{
              width: '9vw',
              display: 'flex',
              justifyContent: 'space-around',
            }}
            onClick={handleClick}
          >
            {' '}
            <GoogleIcon />
            آزمایش
          </Button>
          <Box>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }}>Rich Result Test</Typography>
            </Popover>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }}>
                Structured Data Testing Tool{' '}
              </Typography>
            </Popover>{' '}
          </Box>
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
          <ShowJsonCode />
        </Paper>
      </Box>

      <Box>
        <FormQuestion initialDataQuestion={initialDataQuestion} />
        <Button
          size="large"
          variant="contained"
          onClick={() => setAddInput(true)}
        >
          اضافه کردن سوال
        </Button>
        {/* {addInput && (
          <Collapse in={addInput}>
            <FormQuestion />
          </Collapse>
        )} */}
        {copySuccess && (
          <Collapse in={opened}>
            <Alert
              severity="success"
              sx={{ width: '30vw' }}
              action={
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={() => {
                    setOpened(false);
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
