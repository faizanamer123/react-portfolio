import React from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  CardActions, 
  Button,
  Chip,
  Box
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  githubLink, 
  demoLink 
}) => {
  return (
    <Card className={styles.projectCard}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
        className={styles.cardMedia}
      />
      <CardContent className={styles.cardContent}>
        <Typography variant="h6" component="h3" className={styles.projectTitle}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className={styles.projectDescription}>
          {description}
        </Typography>
        <Box className={styles.techStack}>
          {technologies.map((tech, index) => (
            <Chip 
              key={index} 
              label={tech} 
              size="small" 
              className={styles.techChip}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions className={styles.cardActions}>
        {githubLink && (
          <Button 
            startIcon={<GitHubIcon />} 
            size="small" 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectButton}
          >
            Code
          </Button>
        )}
        {demoLink && (
          <Button 
            startIcon={<LaunchIcon />} 
            size="small" 
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectButton}
          >
            Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;