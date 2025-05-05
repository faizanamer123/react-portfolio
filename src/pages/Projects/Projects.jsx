import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';

// Import images
import codeImg from '../../assets/images/code.png';
import customImg from '../../assets/images/custom.png';
import developerImg from '../../assets/images/developer.png';

const Projects = () => {
  const { updatePageTitle } = usePageTitle();
  
  useEffect(() => {
    updatePageTitle('Projects');
  }, [updatePageTitle]);

  // Project data (no images, with description)
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and secure checkout. Built with a modern MERN stack and robust authentication.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubLink: 'https://github.com/username/ecommerce-platform',
      demoLink: 'https://ecommerce-demo.com'
    },
    {
      id: 2,
      title: 'Portfolio Template',
      description: 'A customizable portfolio template for full stack developers to showcase their work and skills. Features dynamic routing and theme support.',
      technologies: ['React', 'Material UI', 'CSS Modules'],
      githubLink: 'https://github.com/username/portfolio-template',
      demoLink: 'https://portfolio-demo.com'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A task management application with features like task categorization, priorities, and due dates. Real-time sync and notifications included.',
      technologies: ['React', 'Redux', 'Firebase'],
      githubLink: 'https://github.com/username/task-manager',
      demoLink: 'https://task-manager-demo.com'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather dashboard showing current conditions and forecasts for multiple locations. Clean UI and API integration.',
      technologies: ['JavaScript', 'API Integration', 'Bootstrap'],
      githubLink: 'https://github.com/username/weather-dashboard',
      demoLink: 'https://weather-dash-demo.com'
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'An application to find recipes based on available ingredients and dietary preferences. Fast search and beautiful UI.',
      technologies: ['React', 'API Integration', 'CSS Modules'],
      githubLink: 'https://github.com/username/recipe-finder',
      demoLink: 'https://recipe-finder-demo.com'
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'A dashboard to manage and analyze multiple social media accounts from one interface. Includes charts and analytics.',
      technologies: ['React', 'D3.js', 'API Integration'],
      githubLink: 'https://github.com/username/social-dashboard',
      demoLink: 'https://social-dash-demo.com'
    }
  ];

  return (
    <Box className={styles.projectsPage}>
      <Typography variant="body1" className={styles.pageDescription}>
        Here are some of my recent projects. Each project showcases different skills and technologies
        that I've mastered throughout my journey as a web developer.
      </Typography>
      
      <Grid container spacing={3} className={styles.projectsGrid}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;