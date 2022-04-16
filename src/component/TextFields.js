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
  styleInput,
  variantStyle,
  placeholderInput,
  rowsInput,
  minNumber,
}) {
  return (
    <TextField
      min={minNumber}
      name={nameInput}
      type={typeInput}
      value={valueInput}
      id={idInput}
      sx={styleInput}
      label={labelInput}
      onChange={onChangeInput}
      variant={variantStyle}
      placeholder={placeholderInput}
      rows={rowsInput}
    />
  );
}
