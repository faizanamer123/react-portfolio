import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import styles from './Services.module.css';

const services = [
  {
    icon: <CodeIcon fontSize="inherit" />, 
    title: 'Frontend Development', 
    description: 'Building responsive, accessible, and high-performance user interfaces using React, Material UI, and modern JavaScript.'
  },
  {
    icon: <StorageIcon fontSize="inherit" />, 
    title: 'Backend Development', 
    description: 'Designing robust RESTful APIs, authentication, and scalable server-side logic with Node.js, Express, and databases.'
  },
  {
    icon: <CloudIcon fontSize="inherit" />, 
    title: 'Cloud & Deployment', 
    description: 'Deploying full stack applications to cloud platforms (Vercel, Netlify, AWS) with CI/CD, Docker, and performance optimization.'
  },
  {
    icon: <IntegrationInstructionsIcon fontSize="inherit" />, 
    title: 'API Integration', 
    description: 'Integrating third-party APIs, payment gateways, and external services for seamless, feature-rich applications.'
  },
  {
    icon: <SecurityIcon fontSize="inherit" />, 
    title: 'Web Security', 
    description: 'Implementing secure coding practices, authentication, and authorization to protect your data and users.'
  },
];

const Services = () => {
  const { updatePageTitle } = usePageTitle();
  useEffect(() => {
    updatePageTitle('Services');
  }, [updatePageTitle]);

  return (
    <Box className={styles.servicesPage}>
      <Typography variant="body1" className={styles.pageDescription}>
        As a Full Stack Developer, I offer a comprehensive range of services to build, deploy, and secure modern web applications:
      </Typography>
      <Grid container spacing={4} className={styles.servicesGrid}>
        {services.map((service, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
