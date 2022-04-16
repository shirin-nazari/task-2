import { Button, Paper, Typography } from '@mui/material';
import React, { useId, useState } from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Box } from '@mui/system';
import TextFields from '../component/TextFields';
import FormVideo from '../component/FormVideo';
import ShowJsonCodeVideo from '../component/ShowJsonCodeVideo';
const mockData = {
  name: '',
  videoDescription: '',
  uploadDate: '',
  duration: '',
  thumbnailUrl: '',
  contentURL: '',
  embedURL: '',
  seekToActionTargetURL: '',
  publisher: '',
  publisherLogoURL: '',
  logoWidth: '',
  logoHeight: '',
};

export default function Video() {
  const counter = [];
  const [data, setData] = useState(mockData);
  console.log(data);

  // use id
  const id = useId();
  // for (let element = 0; element <= counter.length; element++) {
  //   counter.push(
  //     <TextFields
  //       idInput={id}
  //       labelInput={`Thumbnail URL #${element}`}
  //       nameInput="  thumbnailUrl"
  //       onChangeInput={(e) => {
  //         const { name, value } = e.target;
  //         setData({ ...data, [name]: value });
  //       }}
  //       required
  //       typeInput="url"
  //       styleInput={{ width: '50vw', padding: 2 }}
  //       variantStyle="standard"
  //     />
  //   );
  // }
  return (
    <Paper
      sx={{
        display: { xs: 'block', md: 'flex', lg: 'block' },
        justifyContent: 'space-between',
        width: { lg: '80vw', xs: '40vw', md: '70vw' },
        margin: '30px auto',
        padding: 5,
      }}
    >
      <Box
        sx={{
          width: { lg: '80vw', xs: '40vw', md: '70vw' },
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
      <Box>
        <FormVideo />
      </Box>
      <Box>
        <ShowJsonCodeVideo />
      </Box>
    </Paper>
  );
}
