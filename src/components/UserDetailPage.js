import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Button,Spinner } from 'react-bootstrap';
import { fetchUserDetails } from '../api';

export const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const getUserDetails = async () => {
        try{const userData = await fetchUserDetails(id);
            setUser(userData);
          }
          catch (error) {
            console.error("Error fetching users:", error);
          } finally {
            setTimeout(() => setLoading(false), 500); 
          }
        }
      
    getUserDetails();
  }, [id]);

  if (loading){ 
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
  )}

  return (
    <Container className="user-detail-container">
         <Link to="/users">
          <Button variant="primary" className="back-button">
            &larr; Back to Users
          </Button>
        </Link>
      <div className="user-card">
        <h1 className="user-name">{user.name}</h1>
        <p className="user-info"><strong>Email:</strong> {user.email}</p>
        <p className="user-info"><strong>Phone:</strong> {user.phone}</p>
        <p className="user-info"><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        <p className="user-info"><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
      </div>
    </Container>
  );
};

export default UserDetailPage;
