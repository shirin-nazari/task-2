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
  errorInput,
}) {
  return (
    <TextField
      error={errorInput && errorInput}
      min={minNumber && minNumber}
      name={nameInput && nameInput}
      type={typeInput && typeInput}
      value={valueInput && valueInput}
      id={idInput && idInput}
      sx={styleInput && styleInput}
      label={labelInput && labelInput}
      onChange={onChangeInput && onChangeInput}
      variant={variantStyle && variantStyle}
      placeholder={placeholderInput && placeholderInput}
      rows={rowsInput && rowsInput}
    />
  );
}
