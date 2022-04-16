import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
export default function ShowJsonCodeRecipe() {
  const data = useSelector((state) => state.data);
  return (
    <Box>
      <span>{`<script type="application/ld+json">`}</span>
      <Box sx={{ width: '13vw', flexDirection: 'column' }}>
        {JSON.stringify(data.data, null, '\t\n')}
        {/* .replaceAll(
            ',\n\t"',
            ',\n\n\t"'
          ) */}
      </Box>
      <span>{`</script >`}</span>
    </Box>
  );
}
