import React, { useEffect } from 'react';
import { Box, Grid, Typography, CircularProgress } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { useApi } from '../../hooks/useApi';
import { projectsApi } from '../../utils/api';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';

// Default project data with real images
const defaultProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Features include user authentication, product search, shopping cart, and order tracking.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Material-UI'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    category: 'Full Stack'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features. Includes task assignment, progress tracking, deadline management, and team collaboration tools.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux Toolkit', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/taskmanager',
    liveUrl: 'https://taskmanager-demo.com',
    category: 'Frontend'
  },
  {
    title: 'AI-Powered Chat Application',
    description: 'A real-time chat application with AI integration for smart responses and language processing. Features include message encryption, file sharing, and AI-powered chat suggestions.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['React', 'Node.js', 'Socket.io', 'OpenAI API', 'Express'],
    githubUrl: 'https://github.com/yourusername/ai-chat',
    liveUrl: 'https://ai-chat-demo.com',
    category: 'Full Stack'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing my work and skills with a modern design. Features include dark/light mode, smooth animations, and a contact form with email integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
    technologies: ['React', 'CSS Modules', 'Material-UI', 'Framer Motion', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://portfolio-demo.com',
    category: 'Frontend'
  }
];

const Projects = () => {
  const { updatePageTitle } = usePageTitle();
  const { data: projectsData, loading, error } = useApi(projectsApi.getAll);
  
  useEffect(() => {
    updatePageTitle('Projects');
  }, [updatePageTitle]);

  // Transform API data to match original structure
  const projects = projectsData?.map(project => ({
    title: project.title,
    description: project.description,
    image: project.imageUrl,
    technologies: project.technologies,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    category: project.category
  })) || defaultProjects;

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
        <Typography color="error">Error loading projects: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box className={styles.projectsPage}>
      <Typography variant="body1" className={styles.pageDescription}>
        Here are some of my recent projects. Each project represents a unique challenge
        and learning experience in my journey as a developer.
      </Typography>
      
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              category={project.category}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;