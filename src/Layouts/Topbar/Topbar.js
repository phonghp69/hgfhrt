import React from 'react';
import {useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Topbar() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  function onLogoutClicked() {
    localStorage.setItem('token', '');
    localStorage.setItem('userId', '');
    navigate('/');
    window.location.reload();

  }
    return (
    <div>
        <AppBar position="static" color="error">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" >
            Home
          </Typography>
          {!token ? (
          <Button color="inherit" href="/login">Login</Button>
           
        ) : (
          
          <Button color="inherit" onClick={onLogoutClicked}>
            Logout
          </Button>
        )}
         
        </Toolbar>
      </AppBar>
    </div>  
    );
}

export default Topbar;