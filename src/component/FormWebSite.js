import { Button } from '@mui/material';
import React, { useId, useState } from 'react';
import { Box } from '@mui/system';
import TextFields from './TextFields';
import { useDispatch } from 'react-redux';
import { addData } from '../redux/features/slice/getDataSlice';

const initialDataWebSite = {
  name: '',
  url: '',
  target: '',
};
export default function FormWebSite() {
  const counter = [0, 1, 2, 3, 4, 5];
  const [data, setData] = useState(initialDataWebSite);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  // use id
  const id = useId();
  // add data in store
  dispatch(addData(data));
  return (
    <Box sx={{ margin: 5, width: { lg: '60vw', xs: '40vw', md: '70vw' } }}>
      <TextFields
        idInput={id}
        labelInput="Website's Name"
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
        labelInput="URL"
        nameInput="url"
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
        fullWidth
        labelInput="Internal site search URL (e.g. https://example.com/search?q=)"
        nameInput="target"
        onChangeInput={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
        required
        typeInput="url"
        styleInput={{ width: '55vw', padding: 2 }}
        variantStyle="standard"
      />
    </Box>
  );
}
