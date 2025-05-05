import React, { useEffect } from 'react';
import { Box, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Home.module.css';
import profileImage from '../../assets/images/main.jpeg';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { updatePageTitle } = usePageTitle();
  
  useEffect(() => {
    updatePageTitle('Home');
  }, [updatePageTitle]);

  return (
    <Box className={styles.homePage}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Column - Text Content */}
        <Grid item xs={12} md={7} className={styles.textContent}>
          <Typography variant="h5" component="p" className={styles.greeting}>
            Hello, I'm
          </Typography>
          <Typography variant="h2" component="h1" className={styles.name}>
            Faizan Amir
          </Typography>
          <Typography variant="h4" component="h2" className={styles.role}>
            <span className={styles.typingEffect}>Web Developer</span>
          </Typography>
          <Typography variant="body1" className={styles.bio}>
            I'm a passionate web developer specializing in creating stunning, responsive websites
            and web applications. With expertise in React, Material UI, and modern JavaScript,
            I build engaging digital experiences that help businesses connect with their audience.
          </Typography>
          
          <Box className={styles.btnContainer}>
            <Button 
              component="a" 
              href="/resume.pdf" 
              download
              variant="contained" 
              className={styles.primaryBtn}
              startIcon={<DownloadIcon />}
            >
              Download CV
            </Button>
            <Button 
              component={Link} 
              to="/contact" 
              variant="outlined" 
              className={styles.secondaryBtn}
              startIcon={<EmailIcon />}
            >
              Contact Me
            </Button>
          </Box>
        </Grid>
        
        {/* Right Column - Image */}
        <Grid item xs={12} md={5} className={styles.imageContainer}>
          <Box className={styles.imageWrapper}>
            <img src={profileImage} alt="Faizan Amir" className={styles.profileImage} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;