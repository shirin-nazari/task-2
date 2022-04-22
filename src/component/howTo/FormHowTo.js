import React, { useId, useState } from 'react';
import { Box } from '@mui/system';
import TextFields from '../TextFields';
import { useDispatch } from 'react-redux';
import { addData } from '../../redux/features/slice/getDataSlice';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { MenuItem, Select } from '@mui/material';

const initialDataQuestion = {
  name: '',
  description: '',
};
export default function FormQuestion() {
  const [data, setData] = useState(initialDataQuestion);

  const dispatch = useDispatch();
  // use id
  const id = useId();
  // add data in store
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
        dir="rtl"
        labelInput="نام"
        nameInput="name"
        onChangeInput={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
        required
        typeInput="text"
        styleInput={{ width: '40vw', padding: 1 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        labelInput="توضیحات"
        nameInput="description"
        onChangeInput={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
        required
        typeInput="textarea"
        styleInput={{ width: '40vw', padding: 1 }}
        variantStyle="filled"
        multiline
        rowsInput={12}
      />
      <Box
        sx={{
          display: 'flex',
          flexWrap: { lg: 'nowrap', md: 'wrap', xs: 'wrap' },
        }}
      >
        <TextFields
          idInput={id}
          labelInput="زمان کل"
          nameInput="totalTime"
          onChangeInput={(e) => {
            if (e.target.value < 0) {
              e.target.value = 0;
            } else {
              const { name, value } = e.target;
              setData({ ...data, [name]: `PT${value}M` });
            }
          }}
          required
          typeInput="number"
          minNumber="0"
          styleInput={{ width: '13vw', padding: 1 }}
          variantStyle="filled"
        />
        <TextFields
          idInput={id}
          labelInput="Estimated"
          nameInput="Estimated"
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
          styleInput={{ width: '13vw', padding: 1 }}
          variantStyle="filled"
        />
        <Select
          idInput={id}
          label="LocalBusiness"
          name="currency"
          onChange={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
          required
          sx={{ width: '12vw', padding: 1 }}
          variant="filled"
        >
          <MenuItem value="UnitedStatesDollar" sx={{ width: '20vw' }}>
            $ United States Dollar
          </MenuItem>
          <MenuItem value="BritishPoundSterling" sx={{ width: '20vw' }}>
            British Pound Sterling
          </MenuItem>
          <MenuItem value="Canadian Dollar" sx={{ width: '20vw' }}>
            Canadian Dollar
          </MenuItem>
          <MenuItem value="Euro" sx={{ width: '20vw' }}>
            Euro
          </MenuItem>
          <MenuItem value="UnitedArabEmiratesDirham" sx={{ width: '20vw' }}>
            United Arab Emirates Dirham
          </MenuItem>
        </Select>
      </Box>
      <TextFields
        idInput={id}
        labelInput="نام"
        nameInput="name"
        onChangeInput={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
        required
        typeInput="text"
        styleInput={{ width: '40vw', padding: 1 }}
        variantStyle="filled"
      />
    </Box>
  );
}
