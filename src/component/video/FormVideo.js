import { Button } from '@mui/material';
import React, { useId, useState } from 'react';
import { Box } from '@mui/system';
import TextFields from '../TextFields';
import { useDispatch } from 'react-redux';
import { addData } from '../../redux/features/slice/getDataSlice';

const initialValuesVideo = {
  name: '',
  videoDescription: '',
  uploadDate: '',
  duration: '',
  thumbnailUrl: '',
};

export default function FormVideo() {
  const [data, setData] = useState(initialValuesVideo);
  const [inputList, setInputList] = useState(0);
  const [numberMin, setNumberMin] = useState(0);
  const [numberSec, setNumberSec] = useState(0);

  const updateData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const dispatch = useDispatch();
  // use id

  const id = useId();
  // add data in store
  // dispatch(addData({ ...data, id }));
  dispatch(addData(data));
  return (
    <Box
      sx={{
        width: { lg: '50vw', xs: '40vw', md: '70vw' },
        display: 'flex',
        flexDirection: 'column',
        margin: '30px auto',
      }}
    >
      <TextFields
        idInput={id}
        labelInput="Name"
        nameInput="name"
        onChangeInput={updateData}
        required
        typeInput="text"
        styleInput={{ width: '25vw' }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        labelInput="Video's description"
        nameInput="videoDescription"
        onChangeInput={updateData}
        required
        typeInput="textarea"
        styleInput={{ width: '25vw', margin: 2 }}
        variantStyle="filled"
        multiline
        rowsInput={12}
      />
      <TextFields
        idInput={id}
        // labelInput="Upload date"
        nameInput="uploadDate"
        onChangeInput={updateData}
        required
        typeInput="date"
        styleInput={{ width: '8vw' }}
        variantStyle="filled"
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
            // numberMin = e.target.value;
            setData({ ...data, [name]: `PT${value}M${numberSec}` });
            setNumberMin(value);
          }
        }}
        required
        typeInput="number"
        minNumber="0"
        styleInput={{ width: '8vw', padding: 1 }}
        variantStyle="filled"
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
            setData({ ...data, [name]: `PT${numberMin}M${value}` });
            setNumberSec(value);
          }
        }}
        required
        typeInput="number"
        minNumber="0"
        styleInput={{ width: '8vw', padding: 1 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        fullWidth
        labelInput={`Thumbnail URL #${1}`}
        // labelInput="Thumbnail URL #1"
        nameInput="thumbnailUrl"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '45vw', margin: 2 }}
        variantStyle="filled"
      />
      {/* ////////////////////////////////////// */}
      {inputList <= 0 && (
        <TextFields
          idInput={id}
          fullWidth
          labelInput={`Thumbnail URL #${1}`}
          // labelInput="Thumbnail URL #1"
          nameInput="thumbnailUrl"
          onChangeInput={updateData}
          required
          typeInput="url"
          styleInput={{ width: '45vw', margin: 2 }}
          variantStyle="filled"
        />
      )}
      <Button
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          console.log('you click me');
        }}
      >
        +IMAGE
      </Button>
      <TextFields
        idInput={id}
        labelInput="Content URL"
        nameInput="contentURL"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '10vw', padding: 2 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        labelInput="Embed URL"
        nameInput="embedURL"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '10vw', padding: 2 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        labelInput="SeekToAction Target URL"
        nameInput="seekToActionTargetURL"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '40vw' }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        labelInput="Publisher"
        nameInput="publisher"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '10vw', padding: 2 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        labelInput="Publisher logo URL"
        nameInput=" publisherLogoURL"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '10vw', padding: 2 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        labelInput="Logo width (≤ 600px)"
        nameInput="logoWidth"
        onChangeInput={updateData}
        required
        typeInput="number"
        styleInput={{ width: '10vw', padding: 2 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        labelInput="Logo height (≤ 60px)"
        nameInput="logoHeight"
        onChangeInput={updateData}
        required
        typeInput="number"
        styleInput={{ width: '10vw', padding: 2 }}
        variantStyle="filled"
      />
    </Box>
  );
}
