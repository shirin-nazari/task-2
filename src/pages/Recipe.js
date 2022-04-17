import { Paper, Typography } from '@mui/material';
import React from 'react';

import { Box } from '@mui/system';

import Recipet from '@mui/icons-material/Receipt';
import FormRecipe from '../component/recipe/FormRecipe';
import ShowJsonCodeRecipe from '../component/recipe/ShowJsonCodeRecipe';
import FormAndjson from '../component/recipe/FormAndjson';
export default function Recips() {
  return (
    <Paper
      sx={{
        display: { xs: 'block', md: 'flex', lg: 'flex' },
        flexDirection: 'column',
        width: { lg: '80vw', xs: '40vw', md: '70vw' },
        margin: '30px auto',
        padding: 5,
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            borderBottom: '1px solid #DFDFDF',
            paddingBottom: 2,
            width: { lg: '50vw', xs: '40vw', md: '45vw' },
          }}
        >
          <Recipet sx={{ fontSize: '40px', paddingRight: 1 }} />
          <Typography variant="h4" component="h1">
            Recipet
          </Typography>
        </Box>
      </Box>
      <Box>
        <FormAndjson />
      </Box>
    </Paper>
  );
}
