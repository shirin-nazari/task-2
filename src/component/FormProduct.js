import React, { useId, useState } from 'react';
import { Box } from '@mui/system';
import TextFields from './TextFields';
import { useDispatch } from 'react-redux';
import { addData } from '../redux/features/slice/getDataSlice';

const initialDataProduct = {
  name: '',
  image: '',
  brand: '',
  description: '',
};

export default function FormProduct() {
  const counter = [0, 1, 2, 3, 4, 5];
  const [data, setData] = useState(initialDataProduct);
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
        labelInput="Image URL"
        nameInput="image"
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
        labelInput="Brand"
        nameInput="brand"
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
        labelInput="Product's description"
        nameInput="description"
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
    </Box>
  );
}
