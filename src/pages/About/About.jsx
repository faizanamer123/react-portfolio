import React, { useEffect } from 'react';
import { Box, Typography, Avatar, Grid, Paper } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './About.module.css';
import profileImage from '../../assets/images/main.jpeg';

const skills = [
  'React', 'JavaScript (ES6+)', 'Material UI', 'CSS Modules', 'Node.js', 'Express', 'MongoDB', 'Figma', 'Git', 'Responsive Design'
];

const About = () => {
  const { updatePageTitle } = usePageTitle();
  useEffect(() => {
    updatePageTitle('About');
  }, [updatePageTitle]);

  return (
    <Box className={styles.aboutPage}>
      <Paper className={styles.aboutCard} elevation={3}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} className={styles.avatarSection}>
            <Avatar src={profileImage} alt="Faizan Amir" className={styles.avatar} />
          </Grid>
          <Grid item xs={12} md={8} className={styles.bioSection}>
            <Typography variant="h5" className={styles.name}>Faizan Amir</Typography>
            <Typography variant="subtitle1" className={styles.role}>Full Stack Developer & Designer</Typography>
            <Typography variant="body1" className={styles.bio}>
              I am a passionate full stack developer with a knack for building beautiful, responsive, and user-friendly web applications. My journey in tech started with curiosity and has grown into a career focused on modern JavaScript, React, and UI/UX best practices. I love solving problems, learning new technologies, and collaborating with creative teams.
            </Typography>
            <Box className={styles.skillsList}>
              {skills.map((skill, idx) => (
                <span key={idx} className={styles.skillTag}>{skill}</span>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default About; 