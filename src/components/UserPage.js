import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../api';
import { Container, ListGroup, ListGroupItem, Spinner } from 'react-bootstrap';

export const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setTimeout(() => setLoading(false), 500); 
      }
    };
    getUsers();
  }, []);

  if (loading) {
    return (
        <Container 
        className="d-flex justify-content-center align-items-center" 
        style={{ minHeight: '100vh' }}
      >
        <div className="text-center">
          <Spinner animation="border" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="mt-3">Loading users...</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Users</h1>
      <ListGroup>
        {users.map(user => (
          <ListGroupItem key={user.id} className="d-flex justify-content-between align-items-center">
            <Link to={`/user/${user.id}`} className="text-decoration-none text-dark">
              {user.name}
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};
