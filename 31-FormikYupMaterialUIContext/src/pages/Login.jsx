
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6).required('Required'),
    }),
    onSubmit: async (values) => {
      const res = await fetch('http://localhost:5000/users');
      const users = await res.json();
      const user = users.find(u => u.email === values.email && u.password === values.password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        toast.success('Daxil olundu');
        navigate('/');
      } else {
        toast.error('Email və ya şifrə səhvdir');
      }
    },
  });

  return (
    <Container maxWidth='sm'>
      <form onSubmit={formik.handleSubmit}>
        <TextField fullWidth margin='normal' label='Email' {...formik.getFieldProps('email')} />
        <TextField fullWidth margin='normal' label='Password' type='password' {...formik.getFieldProps('password')} />
        <Button fullWidth variant='contained' color='primary' type='submit'>Login</Button>
      </form>
    </Container>
  );
};

export default Login;
