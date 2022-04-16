import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { Link } from 'react-router-dom';
import VideocamIcon from '@mui/icons-material/Videocam';
import LanguageIcon from '@mui/icons-material/Language';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Recipet from '@mui/icons-material/Receipt';
import FormControl from '@mui/material/FormControl';

export default function SelectFields({
  onChangeInput,
  labelInput,
  styleSx,
  idInput,
  inputLabelId,
  textLabel,
  variantInput,
}) {
  const [whichSchema, setWhichSchema] = useState('');

  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setWhichSchema(event.target.value);
    console.log(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const styleOption = {
    color: 'black',
    textDecoration: 'none',
    display: 'flex',
  };
  return (
    <FormControl>
      <InputLabel id="demo-controlled-open-select-label">
        {textLabel}
      </InputLabel>
      <Select
        onChange={handleChange}
        labelId="demo-controlled-open-select-label"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={whichSchema}
        label={textLabel}
        sx={styleSx}
        variant={variantInput}
        id={idInput}
        placeholder="Which Schema.org markup would you like to create?"
      >
        <MenuItem value="">
          <Link to="/" style={styleOption}>
            <em>None</em>
          </Link>
        </MenuItem>

        <MenuItem value="video">
          <Link to="/video" style={styleOption}>
            <VideocamIcon />
            Video
          </Link>
        </MenuItem>
        <MenuItem value="recipe">
          <Link to="/recipe" style={styleOption}>
            <Recipet />
            Recipe
          </Link>
        </MenuItem>
        <MenuItem value="product" style={styleOption}>
          <Link to="/product" style={styleOption}>
            <LocalOfferIcon />
            Product
          </Link>
        </MenuItem>
        <MenuItem value="website">
          <Link to="/website" style={styleOption}>
            <LanguageIcon />
            Website
          </Link>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
