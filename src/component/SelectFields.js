import React from 'react';
import Select from '@mui/material/Select';

export default function SelectFields({ onChangeInput, labelInput, styleSx }) {
  return (
    <Select onChange={onChangeInput} label={labelInput} sx={styleSx}>
      <option value="10">Ten</option>
      <option value="20">Twenty</option>
    </Select>
  );
}
