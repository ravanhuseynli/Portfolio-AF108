
import React from 'react';
import { Container, Typography } from '@mui/material';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Container>
      {user ? (
        <>
          <Typography variant='h4'>Profile</Typography>
          <Typography variant='h6'>Name: {user.name}</Typography>
          <Typography variant='h6'>Email: {user.email}</Typography>
        </>
      ) : (
        <Typography variant='h6'>Giriş etməmisən</Typography>
      )}
    </Container>
  );
};

export default Profile;
