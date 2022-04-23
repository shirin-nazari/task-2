import React, { useId, useState } from 'react';
import { Box } from '@mui/system';
import TextFields from '../TextFields';
import { useDispatch } from 'react-redux';
import { addData } from '../../redux/features/slice/getDataSlice';
import { MenuItem, Select } from '@mui/material';
import validUrl from 'valid-url';

export default function FormRecipe({ initialDataLocal }) {
  const [data, setData] = useState(initialDataLocal);

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
      <Select
        idInput={id}
        label="LocalBusiness"
        name="LocalBusiness"
        onChange={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
        required
        sx={{ width: '25vw', padding: 1 }}
        variant="filled"
      >
        <MenuItem value="LocalBusiness" sx={{ width: '25vw' }}>
          Local Business
        </MenuItem>
        <MenuItem value="AnimalShelter" sx={{ width: '25vw' }}>
          AnimalShelter
        </MenuItem>
        <MenuItem value="ArchiveOrganization" sx={{ width: '25vw' }}>
          ArchiveOrganization
        </MenuItem>
        <MenuItem value="AutomotiveBusiness" sx={{ width: '25vw' }}>
          AutomotiveBusiness
        </MenuItem>
        <MenuItem value="ChildCare" sx={{ width: '25vw' }}>
          ChildCare
        </MenuItem>
      </Select>
      <TextFields
        idInput={id}
        labelInput="نام"
        nameInput="name"
        onChangeInput={updateData}
        required
        typeInput="text"
        styleInput={{ width: '25vw', padding: 4, margin: 2 }}
        variantStyle="filled"
        multiline
        rowsInput={12}
      />
      <TextFields
        idInput={id}
        labelInput="ادرس عکس"
        nameInput="ImageURL"
        onChangeInput={updateData}
        required
        errorInput={validUrl.isUri(data.ImageURL) ? false : true}
        typeInput="url"
        styleInput={{ width: '25vw', padding: 2 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        fullWidth
        labelInput="ادرس ایدی@"
        nameInput="idURL"
        errorInput={validUrl.isUri(data.idURL) ? false : true}
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '25vw', padding: 2 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        fullWidth
        labelInput="آدرس"
        nameInput="url"
        errorInput={validUrl.isUri(data.url) ? false : true}
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '25vw', padding: 2 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        fullWidth
        labelInput="شماره تلفن"
        nameInput="Phone"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '25vw', padding: 2 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        fullWidth
        labelInput="رنج قیمت"
        nameInput="PriceRange"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '25vw', padding: 2 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        fullWidth
        labelInput="خیابان"
        nameInput="Street"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '25vw', padding: 2 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        fullWidth
        labelInput="شهر"
        nameInput="City"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '25vw', padding: 2 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        fullWidth
        labelInput="Zip code"
        nameInput="ZipCode"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '25vw', padding: 2 }}
        variantStyle="filled"
      />
    </Box>
  );
}
