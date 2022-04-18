import React, { useId, useState } from 'react';
import { Box } from '@mui/system';
import TextFields from '../TextFields';
import { useDispatch } from 'react-redux';
import { addData } from '../../redux/features/slice/getDataSlice';
import validUrl from 'valid-url';
const initialDataWebSite = {
  name: '',
  url: '',
  target: '',
};
export default function FormWebSite() {
  const [data, setData] = useState(initialDataWebSite);

  const dispatch = useDispatch();
  // use id
  const id = useId();
  // add data in store
  dispatch(addData(data));
  return (
    <Box sx={{ margin: 5, width: { lg: '60vw', xs: '40vw', md: '70vw' } }}>
      <TextFields
        idInput={id}
        labelInput="نام وب سایت"
        nameInput="name"
        onChangeInput={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
        required
        typeInput="text"
        styleInput={{ width: '25vw', padding: 1 }}
        variantStyle="filled"
      />
      <TextFields
        idInput={id}
        labelInput="آدرس وب سایت"
        nameInput="url"
        onChangeInput={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
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
        onChangeInput={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
        required
        typeInput="url"
        styleInput={{ width: '50vw', margin: 2, padding: 1 }}
        variantStyle="filled"
      />
    </Box>
  );
}
