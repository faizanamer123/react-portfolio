import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Alert } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useApi } from '../../hooks/useApi';
import { contactApi } from '../../utils/api';
import styles from './Contact.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().min(10, 'Message should be at least 10 characters').required('Message is required'),
});

const Contact = () => {
  const { updatePageTitle } = usePageTitle();
  const [submitted, setSubmitted] = useState(false);
  const { execute: submitContact } = useApi(contactApi.create);

  useEffect(() => {
    updatePageTitle('Contact');
  }, [updatePageTitle]);

  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await submitContact(values);
        setSubmitted(true);
        resetForm();
        setTimeout(() => setSubmitted(false), 4000);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Box className={styles.contactPage}>
      <Paper className={styles.contactCard} elevation={3}>
        <Typography variant="h5" className={styles.contactTitle} gutterBottom>Contact Me</Typography>
        <Typography variant="body1" className={styles.contactSubtitle} gutterBottom>
          Have a question, project, or want to connect? Fill out the form below and I'll get back to you soon!
        </Typography>
        <form onSubmit={formik.handleSubmit} className={styles.form} autoComplete="off">
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            margin="normal"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            variant="outlined"
            margin="normal"
            multiline
            minRows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.submitBtn}
            disabled={formik.isSubmitting}
            sx={{ mt: 2 }}
            fullWidth
          >
            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          {submitted && <Alert severity="success" sx={{ mt: 2 }}>Thank you! Your message has been sent.</Alert>}
        </form>
      </Paper>
    </Box>
  );
};

export default Contact; 