import React, { useId, useState } from 'react';
import { Box } from '@mui/system';
import TextFields from '../TextFields';
import { useDispatch } from 'react-redux';
import { addData } from '../../redux/features/slice/getDataSlice';

export default function FormRecipe({ initialDataRecipe }) {
  const counter = [0, 1, 2, 3, 4, 5];
  const [data, setData] = useState(initialDataRecipe);
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
        labelInput="Website's Name"
        nameInput="name"
        onChangeInput={updateData}
        required
        typeInput="text"
        styleInput={{ width: '25vw', padding: 1 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        labelInput="Recipe's description"
        nameInput="description"
        onChangeInput={updateData}
        required
        typeInput="textarea"
        styleInput={{ width: '25vw', padding: 4, margin: 2 }}
        variantStyle="filled"
        multiline
        rowsInput={12}
      />
      <TextFields
        idInput={id}
        labelInput="Keywords"
        nameInput="Keywords"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '25vw', padding: 2 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        fullWidth
        labelInput="Image URL #1"
        nameInput="image"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '55vw', padding: 2 }}
        variantStyle="filled"
      />
    </Box>
  );
}
