import { Paper, Typography } from '@mui/material';
import React, { useId, useState } from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Box } from '@mui/system';
import TextFields from '../component/TextFields';
import Recipet from '@mui/icons-material/Receipt';
import FormRecipe from '../component/FormRecipe';
import ShowJsonCodeRecipe from '../component/ShowJsonCodeRecipe';
export default function Recips() {
  const [name, setName] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [uploadDate, setUploadDate] = useState('');
  const [minutes, setMinutes] = useState('');
  const [second, setSecond] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const id = useId();
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
          <Recipet sx={{ fontSize: '40px', paddingRight: 1 }} />
          <Typography variant="h4" component="h1">
            Recipet
          </Typography>
        </Box>
        <Box sx={{ margin: 5 }}>
          <FormRecipe />
        </Box>
      </Box>
      <Box>
        <ShowJsonCodeRecipe />
      </Box>
    </Paper>
  );
}
