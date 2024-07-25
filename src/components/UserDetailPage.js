
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Button, CircularProgress, Typography, Box, Paper, Divider,Alert } from '@mui/material';
import { fetchUserDetails } from '../api';

export const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userData = await fetchUserDetails(id);
        setUser(userData);
      } catch (error) {
        setError("ERROR FETCHING USER DETAILS");
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    };

    getUserDetails();
  }, [id]);

  if (loading) {
    return (
      <Container
        maxWidth="sm"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}
      >
        <Box textAlign="center">
          <CircularProgress size={60} />
          <Typography variant="body1" sx={{ mt: 2 }}>Loading user details...</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
        {error ? (
        <Box sx={{ mb: 4 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      ) : (
        <>
      <Link to="/users" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" sx={{ mb: 3 }}>
          &larr; Back to Users
        </Button>
      </Link>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>{user.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h6" gutterBottom><strong>Email:</strong> {user.email}</Typography>
        <Typography variant="h6" gutterBottom><strong>Phone:</strong> {user.phone}</Typography>
        <Typography variant="h6" gutterBottom>
          <strong>Website:</strong> 
          <a href={`http://${user.website}`} target="_blank"  style={{ textDecoration: 'none', color: 'inherit' }}>
            {user.website}
          </a>
        </Typography>
        <Typography variant="h6" gutterBottom>
          <strong>Address:</strong> {user.address.street}, {user.address.city}
        </Typography>
      </Paper>
      </>
       )}
    </Container>
  );
};

export default UserDetailPage;
