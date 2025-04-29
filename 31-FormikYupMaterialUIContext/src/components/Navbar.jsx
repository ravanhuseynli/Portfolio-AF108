
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' onClick={() => navigate('/')} sx={{ cursor: 'pointer', flexGrow: 1 }}>MyApp</Typography>
        <IconButton color='inherit' onClick={handleMenu}><MenuIcon /></IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          {!user && <MenuItem onClick={() => { navigate('/register'); handleClose(); }}>Register</MenuItem>}
          {!user && <MenuItem onClick={() => { navigate('/login'); handleClose(); }}>Login</MenuItem>}
          {user && <MenuItem onClick={() => { handleLogout(); handleClose(); }}>Logout</MenuItem>}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
