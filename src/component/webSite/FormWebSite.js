import React, { useId, useState } from 'react';
import { Box } from '@mui/system';
import TextFields from '../TextFields';
import { useDispatch } from 'react-redux';
import { addData } from '../../redux/features/slice/getDataSlice';
import validUrl from 'valid-url';

export default function FormWebSite({ initialDataWebSite }) {
  const [data, setData] = useState(initialDataWebSite);

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
        labelInput="نام وب سایت"
        nameInput="name"
        onChangeInput={updateData}
        required
        typeInput="text"
        styleInput={{ width: '25vw', padding: 1 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        labelInput="آدرس وب سایت"
        nameInput="url"
        onChangeInput={updateData}
        required
        typeInput="textarea"
        styleInput={{ width: '25vw', padding: 1 }}
        errorInput={validUrl.isUri(data.url) ? false : true}
        variantStyle="filled"
        multiline
        rowsInput={12}
      />

      <TextFields
        idInput={id}
        fullWidth
        labelInput="Internal site search URL (e.g. https://example.com/search?q=)"
        nameInput="target"
        onChangeInput={updateData}
        required
        typeInput="url"
        styleInput={{ width: '50vw', margin: 2, padding: 1 }}
        variantStyle="filled"
      />
    </Box>
  );
}
