import React, { useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow 
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Education.module.css';

const Education = () => {
  const { updatePageTitle } = usePageTitle();
  
  useEffect(() => {
    updatePageTitle('Education');
  }, [updatePageTitle]);

  // Education data
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      duration: '2019 - 2021',
      gpa: '3.8/4.0',
      details: 'Specialized in Human-Computer Interaction and Web Technologies'
    },
    {
      degree: 'Bachelor of Engineering in Software Engineering',
      institution: 'University of California',
      location: 'Berkeley, CA',
      duration: '2015 - 2019',
      gpa: '3.7/4.0',
      details: 'Graduated with Honors. Final project: Developing a social media platform for local communities'
    },
    {
      degree: 'Associate Degree in Web Development',
      institution: 'San Francisco City College',
      location: 'San Francisco, CA',
      duration: '2013 - 2015',
      gpa: '3.9/4.0',
      details: 'Focused on frontend and backend technologies for web applications'
    }
  ];

  return (
    <Box className={styles.educationPage}>
      <Box className={styles.sectionHeader}>
        <SchoolIcon className={styles.sectionIcon} />
        <Typography variant="h5" component="h2" className={styles.sectionTitle}>
          Academic Background
        </Typography>
      </Box>

      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table aria-label="education table">
          <TableHead>
            <TableRow className={styles.tableHeader}>
              <TableCell>Degree</TableCell>
              <TableCell>Institution</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>GPA</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {education.map((edu, index) => (
              <TableRow 
                key={index}
                className={index % 2 === 0 ? styles.evenRow : styles.oddRow}
              >
                <TableCell component="th" scope="row">
                  <Typography variant="body1" className={styles.degreeTitle}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="body2" className={styles.degreeDetails}>
                    {edu.details}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" className={styles.institutionName}>
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" className={styles.institutionLocation}>
                    {edu.location}
                  </Typography>
                </TableCell>
                <TableCell>{edu.duration}</TableCell>
                <TableCell>{edu.gpa}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box className={styles.certifications}>
        <Typography variant="h6" className={styles.subTitle}>
          Certifications & Additional Training
        </Typography>
        <ul className={styles.certList}>
          <li>AWS Certified Solutions Architect - 2022</li>
          <li>Google Professional Web Developer - 2021</li>
          <li>Certified Scrum Master - 2020</li>
          <li>Advanced React and Redux - Udemy - 2019</li>
        </ul>
      </Box>
    </Box>
  );
};

export default Education;