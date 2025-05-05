import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import styles from './SkillBar.module.css';

const SkillBar = ({ skill, percentage }) => {
  const [progress, setProgress] = useState(0);
  const skillRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the skill bar comes into view
        if (entry.isIntersecting) {
          // Animate the progress
          setProgress(percentage);
          // Unobserve after animating once
          observer.unobserve(skillRef.current);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percentage]);

  return (
    <Box className={styles.skillBar} ref={skillRef}>
      <Box className={styles.skillHeader}>
        <Typography variant="body1" className={styles.skillName}>
          {skill}
        </Typography>
        <Typography variant="body2" className={styles.skillPercentage}>
          {progress}%
        </Typography>
      </Box>
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        className={styles.progressBar}
        classes={{
          bar: styles.progressBarFill
        }}
      />
    </Box>
  );
};

export default SkillBar;