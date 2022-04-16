import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
export default function ShowJsonCodeVideo() {
  const data = useSelector((state) => state.data);
  console.log(data);
  return (
    <Box sx={{ width: '20vw', display: 'flex', flexDirection: 'column' }}>
      <span>{`<script type="application/ld+json">`}</span>
      <span>{`{`}</span>
      <span>{`@context": "https://schema.org",`}</span>
      <span>{`"@type": "VideoObject",`}</span>
      <span>{`"name":"${data.data.name}" ,`}</span>
      <span>{`"description":"${data.data.videoDescription}",`}</span>
      <span>{`"thumbnailUrl":"${data.data.thumbnailUrl}",`}</span>
      <span>{`"uploadDate": "${data.data.uploadDate}"`}</span>
      <span>{`"duration" : "${data.data.duration}"`}</span>
      <span>{`"contentUR":"${data.data.contentURL}"`}</span>
      <span>{`" embedURL" : "${data.data.embedURL}"`}</span>
      <span>{`}`}</span>
      <span>{`</script>`}</span>
    </Box>
  );
}
