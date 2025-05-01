import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import ProductList from './components/ProductList';
import WishlistPage from './components/WishlistPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={user ? <ProductList /> : <Navigate to="/login" />} />
          <Route path="/wishlist" element={user ? <WishlistPage /> : <Navigate to="/login" />} />
          <Route path="/login" element={<AuthForm mode="login" />} />
          <Route path="/register" element={<AuthForm mode="register" />} />
        </Routes>
      </Container>
      <ToastContainer />
    </Router>
  );
}

export default App;
