import { Button } from '@mui/material';
import React, { useId, useState } from 'react';
import { Box } from '@mui/system';
import TextFields from '../TextFields';
import { useDispatch } from 'react-redux';
import { addData } from '../../redux/features/slice/getDataSlice';

const initialDataVideo = {
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

export default function FormVideo() {
  const counter = [0, 1, 2, 3, 4, 5];
  const [data, setData] = useState(initialDataVideo);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  // use id
  const id = useId();
  // add data in store
  dispatch(addData(data));
  const addInput = () => (
    <TextFields
      idInput={id}
      labelInput={`Thumbnail URL #${1 + 1}`}
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
  );

  // counter.map((item) => (
  //   <TextFields
  //     idInput={id}
  //     labelInput={`Thumbnail URL #${item}`}
  //     nameInput="  thumbnailUrl"
  //     onChangeInput={(e) => {
  //       const { name, value } = e.target;
  //       setData({ ...data, [name]: value });
  //     }}
  //     required
  //     typeInput="url"
  //     styleInput={{ width: '50vw', padding: 2 }}
  //     variantStyle="standard"
  //   />
  // ));
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
    <Box sx={{ margin: 5, width: { lg: '60vw', xs: '40vw', md: '70vw' } }}>
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
        styleInput={{ width: '8vw' }}
        variantStyle="standard"
        placeholderInput="upload Date"
      />
      <TextFields
        idInput={id}
        labelInput="Minutes"
        nameInput="duration"
        onChangeInput={(e) => {
          if (e.target.value < 0) {
            e.target.value = 0;
          } else {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }
        }}
        required
        typeInput="number"
        minNumber="0"
        styleInput={{ width: '8vw', padding: 1 }}
        variantStyle="standard"
      />
      <TextFields
        idInput={id}
        labelInput="Second"
        nameInput="duration"
        onChangeInput={(e) => {
          if (e.target.value < 0) {
            e.target.value = 0;
          } else {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }
        }}
        required
        typeInput="number"
        minNumber="0"
        styleInput={{ width: '8vw', padding: 1 }}
        variantStyle="standard"
      />
      <TextFields
        idInput={id}
        fullWidth
        labelInput={`Thumbnail URL #${1}`}
        // labelInput="Thumbnail URL #1"
        nameInput="thumbnailUrl"
        onChangeInput={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
        required
        typeInput="url"
        styleInput={{ width: '55vw', padding: 2 }}
        variantStyle="standard"
      />

      <Button variant="contained" onClick={() => addInput()}>
        +IMAGE
      </Button>

      <TextFields
        idInput={id}
        labelInput="Content URL"
        nameInput="contentURL"
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
    </Box>
  );
}
