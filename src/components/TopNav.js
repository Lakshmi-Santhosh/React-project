
import React from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container } from '@mui/material';


const TopNav = () => {
  const navigate = useNavigate();
  const isAuthenticated = Boolean(localStorage.getItem('authToken'));

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };
  
  return (
    <AppBar position="static" sx={{ bgcolor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar>
          
          <img
              src='https://img.icons8.com/?size=100&id=123603&format=png&color=000000'
              alt='Logo'
              style={{ height: '40px', width: 'auto', marginRight: '10px' }}
            />
           
          <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%' ,}}>
            <Button color="inherit" component={NavLink}  to="/"  sx={{'&:active': {  background:'blue'} ,'&:focus':{background:'blue'},'&:hover':{background:'blue'},'&:Mui-selected':{background:'purple'}}} end>Home</Button>
            <Button color="inherit" component={NavLink} to="/about"  sx={{'&:active': {  background:'blue'} ,'&:focus':{background:'blue'},'&:hover':{background:'blue'}}} >About</Button>
            <Button color="inherit" component={NavLink} to="/contact" sx={{'&:active': {  background:'blue'} ,'&:focus':{background:'blue'},'&:hover':{background:'blue'}}}>Contact</Button>
            <Button color="inherit" component={NavLink} to="/users" sx={{'&:active': {  background:'blue'} ,'&:focus':{background:'blue'},'&:hover':{background:'blue'}}}>Users</Button>
            <Button color="inherit" component={NavLink} to="/chart" sx={{'&:active': {  background:'blue'} ,'&:focus':{background:'blue'},'&:hover':{background:'blue'}}}>Charts</Button>
            {isAuthenticated ? (
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            ) : (
              <Button color="inherit" component={Link} to="/login" sx={{'&:active': {  background:'blue'} ,'&:focus':{background:'blue'},'&:hover':{background:'blue'}}}>Login</Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNav;
