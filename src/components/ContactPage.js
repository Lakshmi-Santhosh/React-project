import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

export const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions or need assistance, you can reach out to us at the following contact details:
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Company Name</Typography>
          <Typography variant="body1">123 Business Rd.</Typography>
          <Typography variant="body1">Business City, BC 12345</Typography>
          <Typography variant="body1">Country</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Phone</Typography>
          <Typography variant="body1">+1 (555) 123-4567</Typography>
        </Box>
      </Paper>
    </Container>
  );
};
