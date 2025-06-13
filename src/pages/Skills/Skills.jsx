import React, { useEffect } from 'react';
import { Box, Grid, Typography, Paper, CircularProgress } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import { usePageTitle } from '../../context/PageTitleContext';
import { useApi } from '../../hooks/useApi';
import { skillsApi } from '../../utils/api';
import SkillBar from '../../components/SkillBar/SkillBar';
import styles from './Skills.module.css';

const Skills = () => {
  const { updatePageTitle } = usePageTitle();
  const { data: skillsData, loading, error } = useApi(skillsApi.getAll);
  
  useEffect(() => {
    updatePageTitle('Skills');
  }, [updatePageTitle]);

  // Transform API data to match original structure
  const frontendSkills = skillsData?.filter(skill => skill.category === 'Technical')
    .map(skill => ({
      name: skill.name,
      percentage: skill.proficiency * 20
    })) || [
    { name: 'HTML5/CSS3', percentage: 90 },
    { name: 'JavaScript (ES6+)', percentage: 85 },
    { name: 'React.js', percentage: 90 },
    { name: 'Material UI', percentage: 85 },
    { name: 'CSS Modules', percentage: 80 }
  ];

  const backendSkills = skillsData?.filter(skill => skill.category === 'Tools')
    .map(skill => ({
      name: skill.name,
      percentage: skill.proficiency * 20
    })) || [
    { name: 'Node.js', percentage: 75 },
    { name: 'Express.js', percentage: 80 },
    { name: 'RESTful APIs', percentage: 85 },
    { name: 'GraphQL', percentage: 70 },
    { name: 'Firebase', percentage: 75 }
  ];

  const databaseSkills = skillsData?.filter(skill => skill.category === 'Languages')
    .map(skill => ({
      name: skill.name,
      percentage: skill.proficiency * 20
    })) || [
    { name: 'MongoDB', percentage: 80 },
    { name: 'MySQL', percentage: 75 },
    { name: 'PostgreSQL', percentage: 65 },
    { name: 'Redis', percentage: 60 }
  ];

  const designSkills = skillsData?.filter(skill => skill.category === 'Other')
    .map(skill => ({
      name: skill.name,
      percentage: skill.proficiency * 20
    })) || [
    { name: 'Figma', percentage: 70 },
    { name: 'Adobe XD', percentage: 65 },
    { name: 'UI/UX Principles', percentage: 80 },
    { name: 'Responsive Design', percentage: 90 }
  ];

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography color="error">Error loading skills data: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box className={styles.skillsPage}>
      <Typography variant="body1" className={styles.pageDescription}>
        I've acquired a diverse set of skills throughout my career as a web developer.
        Here's an overview of my technical expertise and proficiency levels.
      </Typography>
      
      <Grid container spacing={4}>
        {/* Frontend Skills */}
        <Grid item xs={12} md={6}>
          <Paper className={styles.skillSection}>
            <Box className={styles.sectionHeader}>
              <CodeIcon className={styles.sectionIcon} />
              <Typography variant="h6" className={styles.sectionTitle}>
                Frontend Development
              </Typography>
            </Box>
            <Box className={styles.skillsList}>
              {frontendSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </Box>
          </Paper>
        </Grid>
        
        {/* Backend Skills */}
        <Grid item xs={12} md={6}>
          <Paper className={styles.skillSection}>
            <Box className={styles.sectionHeader}>
              <StorageIcon className={styles.sectionIcon} />
              <Typography variant="h6" className={styles.sectionTitle}>
                Backend Development
              </Typography>
            </Box>
            <Box className={styles.skillsList}>
              {backendSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </Box>
          </Paper>
        </Grid>
        
        {/* Database Skills */}
        <Grid item xs={12} md={6}>
          <Paper className={styles.skillSection}>
            <Box className={styles.sectionHeader}>
              <StorageIcon className={styles.sectionIcon} />
              <Typography variant="h6" className={styles.sectionTitle}>
                Database & Storage
              </Typography>
            </Box>
            <Box className={styles.skillsList}>
              {databaseSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </Box>
          </Paper>
        </Grid>
        
        {/* Design Skills */}
        <Grid item xs={12} md={6}>
          <Paper className={styles.skillSection}>
            <Box className={styles.sectionHeader}>
              <BrushIcon className={styles.sectionIcon} />
              <Typography variant="h6" className={styles.sectionTitle}>
                Design & UI/UX
              </Typography>
            </Box>
            <Box className={styles.skillsList}>
              {designSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Additional Skills */}
      <Paper className={`${styles.skillSection} ${styles.additionalSkills}`}>
        <Typography variant="h6" className={styles.sectionTitle}>
          Additional Skills
        </Typography>
        <Grid container spacing={2} className={styles.tagsContainer}>
          {[
            'Git/GitHub', 'Webpack', 'Jest', 'Unit Testing', 'Agile/Scrum',
            'Responsive Design', 'Progressive Web Apps', 'Web Accessibility',
            'Performance Optimization', 'SEO Principles', 'Docker', 'CI/CD'
          ].map((skill, index) => (
            <Grid item key={index}>
              <Box className={styles.skillTag}>
                {skill}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Skills;