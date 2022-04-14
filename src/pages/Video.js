import { Button, Paper, Typography } from '@mui/material';
import React, { useId, useState } from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Box } from '@mui/system';
import TextFields from '../component/TextFields';
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
  const [isTrue, setIsTrue] = useState(false);
  const count = 0;
  const [data, setData] = useState(mockData);
  console.log(data);
  // use id
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
          onChangeInput={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          typeInput="text"
          styleInput={{ width: '25vw', padding: 1 }}
          variantStyle="standard"
        />
        <TextFields
          idInput={id}
          labelInput="Video's description"
          nameInput="videoDescription"
          onChangeInput={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          typeInput="textarea"
          styleInput={{ width: '25vw', padding: 4, margin: 2 }}
          variantStyle="standard"
          multiline
          rowsInput={12}
        />
        <TextFields
          idInput={id}
          labelInput="Upload date"
          nameInput="uploadDate"
          onChangeInput={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          typeInput="date"
          styleInput={{ width: '10vw' }}
          variantStyle="standard"
          placeholderInput="upload Date"
        />
        <TextFields
          idInput={id}
          labelInput="Minutes"
          nameInput=" duration"
          onChangeInput={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          typeInput="number"
          styleInput={{ width: '10vw', padding: 2 }}
          variantStyle="standard"
        />
        <TextFields
          idInput={id}
          labelInput="Second"
          nameInput=" duration"
          onChangeInput={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          typeInput="number"
          styleInput={{ width: '10vw', padding: 2 }}
          variantStyle="standard"
        />
        <TextFields
          idInput={id}
          labelInput={`Thumbnail URL #${count + 1}`}
          // labelInput="Thumbnail URL #1"
          nameInput="thumbnailUrl"
          onChangeInput={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          typeInput="url"
          styleInput={{ width: '50vw', padding: 2 }}
          variantStyle="standard"
        />
        {isTrue && (
          <TextFields
            idInput={id}
            labelInput={`Thumbnail URL #${count}`}
            nameInput="  thumbnailUrl"
            onChangeInput={(e) => {
              const { name, value } = e.target;
              setData({ ...data, [name]: value });
            }}
            required
            typeInput="url"
            styleInput={{ width: '50vw', padding: 2 }}
            variantStyle="standard"
          />
        )}
        <Button
          variant="contained"
          onClick={(e) => {
            setIsTrue(true);
            count += 1;
          }}
        >
          +IMAGE
        </Button>
        <TextFields
          idInput={id}
          labelInput="Content URL"
          nameInput=" contentURL"
          onChangeInput={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          typeInput="url"
          styleInput={{ width: '10vw', padding: 2 }}
          variantStyle="standard"
        />
        <TextFields
          idInput={id}
          labelInput="Embed URL"
          nameInput="embedURL"
          onChangeInput={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          typeInput="url"
          styleInput={{ width: '10vw', padding: 2 }}
          variantStyle="standard"
        />
        <TextFields
          idInput={id}
          labelInput="SeekToAction Target URL"
          nameInput="seekToActionTargetURL"
          onChangeInput={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          typeInput="url"
          styleInput={{ width: '50vw', padding: 2 }}
          variantStyle="standard"
        />
        <TextFields
          idInput={id}
          labelInput="Publisher"
          nameInput="publisher"
          onChangeInput={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          typeInput="url"
          styleInput={{ width: '10vw', padding: 2 }}
          variantStyle="standard"
        />
        <TextFields
          idInput={id}
          labelInput="Publisher logo URL"
          nameInput=" publisherLogoURL"
          onChangeInput={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          typeInput="url"
          styleInput={{ width: '10vw', padding: 2 }}
          variantStyle="standard"
        />
        <TextFields
          idInput={id}
          labelInput="Logo width (≤ 600px)"
          nameInput="logoWidth"
          onChangeInput={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          typeInput="number"
          styleInput={{ width: '10vw', padding: 2 }}
          variantStyle="standard"
        />
        <TextFields
          idInput={id}
          labelInput="Logo height (≤ 60px)"
          nameInput="logoHeight"
          onChangeInput={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          typeInput="number"
          styleInput={{ width: '10vw', padding: 2 }}
          variantStyle="standard"
        />
        {/* <span>{name}</span>
        <p>{videoDescription}</p> */}
        {/* <span>{uploadDate}</span> */}
      </Box>
    </Paper>
  );
}
