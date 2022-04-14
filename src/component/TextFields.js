import { TextField } from '@mui/material';
import React from 'react';

export default function TextFields({
  nameInput,
  required,
  typeInput,
  valueInput,
  idInput,
  labelInput,
  onChangeInput,
}) {
  return (
    <TextField
      name={nameInput}
      type={typeInput}
      value={valueInput}
      id={idInput}
      label={labelInput}
      onChange={onChangeInput}
    />
  );
}
