import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { toast } from 'react-toastify';

const Navbar = ({ setAuthMode }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.info("Logged out");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Auth App</Typography>
        {!user ? (
          <>
            <Button color="inherit" onClick={() => setAuthMode("register")}>Register</Button>
            <Button color="inherit" onClick={() => setAuthMode("login")}>Login</Button>
          </>
        ) : (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
