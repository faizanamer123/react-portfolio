import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box component="footer" className={styles.footer}>
      <Typography variant="body2" align="center">
        &copy; {currentYear} Faizan Amir. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center" className={styles.footerText}>
        Made with <span className={styles.heart}>❤️</span> using React & Material UI
      </Typography>
    </Box>
  );
};

export default Footer;