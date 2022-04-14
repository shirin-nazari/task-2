import { Paper, Typography } from '@mui/material';
import React, { useId, useState } from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Box } from '@mui/system';
import TextFields from '../component/TextFields';

export default function Video() {
  const [name, setName] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [uploadDate, setUploadDate] = useState('');
  const id = useId();
  return (
    <Paper
      sx={{
        display: { xs: 'block', md: 'flex', lg: 'block' },
        justifyContent: 'space-between',
        // width: '80vw',
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
          width: '80vw',
        }}
      >
        <VideocamIcon sx={{ fontSize: '40px', paddingRight: 1 }} />
        <Typography variant="h4" component="h1">
          Video
        </Typography>
      </Box>
      <Box sx={{ margin: 5 }}>
        <TextFields
          idInput={id}
          labelInput="Name"
          nameInput="name"
          onChangeInput={(e) => setName(e.target.value)}
          required
          typeInput="text"
          valueInput={name}
          styleInput={{ width: '25vw', padding: 1 }}
          variantStyle="standard"
        />
        <TextFields
          idInput={id}
          labelInput="Video's description"
          nameInput="Video's description"
          onChangeInput={(e) => setVideoDescription(e.target.value)}
          required
          typeInput="text"
          valueInput={videoDescription}
          styleInput={{ width: '25vw', padding: 4, margin: 2, height: '40vh' }}
          variantStyle="standard"
        />
        <TextFields
          idInput={id}
          labelInput="Upload date"
          nameInput="upload date"
          onChangeInput={(e) => setUploadDate(e.target.value)}
          required
          typeInput="date"
          valueInput={uploadDate}
          styleInput={{ width: '10vw' }}
          variantStyle="standard"
          placeholderInput="upload Date"
        />
        {/* <span>{name}</span>
        <p>{videoDescription}</p> */}
        {/* <span>{uploadDate}</span> */}
      </Box>
    </Paper>
  );
}
