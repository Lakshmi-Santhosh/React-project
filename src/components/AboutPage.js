import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

export const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        About React
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          What is React?
        </Typography>
        <Typography variant="body1" paragraph>
          React is a popular JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience. Developed and maintained by Facebook, React allows developers to create large web applications that can change data, without reloading the page.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Key Features:
        </Typography>
        <ul>
          <li><Typography variant="body1">Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs.</Typography></li>
          <li><Typography variant="body1">Declarative: Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</Typography></li>
        </ul>
      </Paper>
      
    </Container>
  );
};
