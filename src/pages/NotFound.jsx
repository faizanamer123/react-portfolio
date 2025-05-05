import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Box sx={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', p: 3 }}>
    <Typography variant="h2" color="primary" gutterBottom>404</Typography>
    <Typography variant="h5" gutterBottom>Page Not Found</Typography>
    <Typography variant="body1" sx={{ mb: 3 }}>
      Oops! The page you are looking for does not exist.<br />
      You may have mistyped the address or the page may have moved.
    </Typography>
    <Button component={Link} to="/" variant="contained" color="primary">
      Go to Home
    </Button>
  </Box>
);

export default NotFound; 