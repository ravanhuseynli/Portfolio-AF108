import React, { useState } from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [authMode, setAuthMode] = useState(null);

  return (
    <>
      <Navbar setAuthMode={setAuthMode} />
      <Container maxWidth="sm">
        {authMode ? (
          <AuthForm mode={authMode} setAuthMode={setAuthMode} />
        ) : (
          <h2 style={{ marginTop: 50 }}>Welcome! Please login or register.</h2>
        )}
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
