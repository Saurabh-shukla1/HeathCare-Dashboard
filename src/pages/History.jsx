import React from 'react';
import { Box, Typography } from '@mui/material';

const History = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>History</Typography>
      <Typography variant="body1">Your medical history and past appointments will appear here.</Typography>
    </Box>
  );
};

export default History; 