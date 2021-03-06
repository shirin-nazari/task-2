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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import StoreIcon from '@mui/icons-material/Store';

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
    width: '40vw',
  };
  return (
    <FormControl dir="rtl" sx={{ direction: 'rtl' }}>
      <InputLabel
        dir="rtl"
        sx={{ direction: 'rtl' }}
        id="demo-controlled-open-select-label"
      >
        {textLabel}
      </InputLabel>
      <Select
        dir="rtl"
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
        // placeholder="از موارد زیر برای ساخت اسکیما انتخاب کنید"
      >
        <MenuItem value="" sx={{ width: '40vw', direction: 'rtl' }}>
          <Link to="/" style={styleOption}>
            <em>None</em>
          </Link>
        </MenuItem>
        <MenuItem value="How-to" sx={{ width: '40vw', direction: 'rtl' }}>
          <Link to="/How-to" style={styleOption}>
            <FormatListNumberedIcon />
            How-to
          </Link>
        </MenuItem>
        <MenuItem value="fAqPage" sx={{ width: '40vw', direction: 'rtl' }}>
          <Link to="/faq" style={styleOption}>
            <HelpOutlineIcon />
            FAQ Page
          </Link>
        </MenuItem>
        <MenuItem
          value="LocalBusiness"
          sx={{ width: '40vw', direction: 'rtl' }}
        >
          <Link to="/LocalBusiness" style={styleOption}>
            <StoreIcon />
            Local Business
          </Link>
        </MenuItem>
        <MenuItem value="video" sx={{ width: '40vw', direction: 'rtl' }}>
          <Link to="/video" style={styleOption}>
            <VideocamIcon />
            Video
          </Link>
        </MenuItem>
        <MenuItem value="recipe" sx={{ width: '40vw', direction: 'rtl' }}>
          <Link to="/recipe" style={styleOption}>
            <Recipet />
            Recipe
          </Link>
        </MenuItem>
        <MenuItem
          value="product"
          style={styleOption}
          sx={{ width: '40vw', direction: 'rtl' }}
        >
          <Link to="/product" style={styleOption}>
            <LocalOfferIcon />
            Product
          </Link>
        </MenuItem>
        <MenuItem value="website" sx={{ width: '40vw', direction: 'rtl' }}>
          <Link to="/website" style={styleOption}>
            <LanguageIcon />
            Website
          </Link>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
