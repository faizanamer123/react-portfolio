import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, image, technologies, githubUrl, liveUrl, category }) => {
  return (
    <Card className={styles.projectCard}>
      <Box className={styles.imageContainer}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          className={styles.projectImage}
        />
        <Box className={styles.overlay}>
          <Box className={styles.overlayContent}>
            <Tooltip title="View Code">
              <IconButton
                className={styles.iconButton}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Live Demo">
              <IconButton
                className={styles.iconButton}
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LaunchIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <CardContent className={styles.cardContent}>
        <Typography variant="h6" component="h3" className={styles.projectTitle}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className={styles.projectDescription}>
          {description}
        </Typography>
        <Box className={styles.technologiesContainer}>
          {technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              className={styles.techChip}
            />
          ))}
        </Box>
        <Chip
          label={category}
          size="small"
          className={styles.categoryChip}
        />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;