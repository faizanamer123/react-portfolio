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
  TableRow,
  CircularProgress
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { usePageTitle } from '../../context/PageTitleContext';
import { useApi } from '../../hooks/useApi';
import { educationApi } from '../../utils/api';
import styles from './Education.module.css';

const Education = () => {
  const { updatePageTitle } = usePageTitle();
  const { data: educationData, loading, error } = useApi(educationApi.getAll);
  
  useEffect(() => {
    updatePageTitle('Education');
  }, [updatePageTitle]);

  // Transform API data to match original structure
  const education = educationData?.map(edu => ({
    degree: edu.degree,
    institution: edu.institution,
    location: edu.location,
    duration: `${new Date(edu.startDate).getFullYear()} - ${edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}`,
    details: edu.description
  })) || [
    {
      degree: 'Bachelor of Science in Information and Technology',
      institution: 'University of Information and Technology',
      location: 'Lahore, Pakistan',
      duration: '2023 - 2027',
      details: 'Specialized in modern web technologies and software engineering.'
    },
    {
      degree: 'Intermediate (Pre-Engineering)',
      institution: 'Punjab College',
      location: 'Lahore, Pakistan',
      duration: '2021 - 2023',
      details: 'Focused on mathematics, physics, and computer science.'
    },
    {
      degree: 'Matriculation',
      institution: 'Divisional Public School',
      location: 'Lahore, Pakistan',
      duration: '2011 - 2021',
      details: 'Completed primary and secondary education with a focus on science.'
    }
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
        <Typography color="error">Error loading education data: {error}</Typography>
      </Box>
    );
  }

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
          <li>Code Rush - 2024</li>
          <li>Softec App Dev Runner Up - 2025</li>
        </ul>
      </Box>
    </Box>
  );
};

export default Education;