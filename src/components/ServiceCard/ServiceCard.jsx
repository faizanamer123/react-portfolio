import React from 'react';
import { Paper, Typography, Box, useTheme } from '@mui/material';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ icon, title, description }) => {
  const theme = useTheme();
  
  return (
    <Paper className={styles.serviceCard}>
      <Box className={styles.iconContainer}>
        {icon}
      </Box>
      <Typography variant="h6" component="h3" className={styles.serviceTitle}>
        {title}
      </Typography>
      <Typography variant="body2" className={styles.serviceDescription}>
        {description}
      </Typography>
    </Paper>
  );
};

export default ServiceCard;