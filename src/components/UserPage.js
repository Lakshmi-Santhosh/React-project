import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../api';
import { Container, List, ListItem, CircularProgress, Typography, Box, Alert } from '@mui/material';

export const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);  
      } catch (error) {
        setError("ERROR FETCHING.");
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    };
    getUsers();
  }, []);

  if (loading) {
    return (
      <Container
        maxWidth="sm"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}
      >
        <Box textAlign="center">
          <CircularProgress size={60} />
          <Typography variant="body1" sx={{ mt: 2 }}>Loading users...</Typography>
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
          <Typography variant="h4" align="center" gutterBottom>Users</Typography>
          <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 2, boxShadow: 3, p: 2, backgroundColor: '#f5f5f5' }}>
            <List>
              {users.map(user => (
                <ListItem
                  key={user.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid #e0e0e0',
                    py: 1,
                    '&:hover': {
                      backgroundColor: '#fff',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <Link to={`/user/${user.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="body1">{user.name}</Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </>
      )}
    </Container>
  );
};
