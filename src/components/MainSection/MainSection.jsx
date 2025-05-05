import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './MainSection.module.css';

const MainSection = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { pageTitle } = usePageTitle();

  return (
    <Box 
      component="main" 
      className={styles.mainSection}
      sx={{ 
        flexGrow: 1, 
        p: 3,
        ml: { xs: 0, md: '240px' }, // Adjust margin based on drawer width
        width: { xs: '100%', md: 'calc(100% - 240px)' },
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          component="h1" 
          className={styles.pageTitle}
          sx={{ mb: 4, fontWeight: 600 }}
        >
          {pageTitle}
        </Typography>
        {children}
      </Container>
    </Box>
  );
};

export default MainSection;