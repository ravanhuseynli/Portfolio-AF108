import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6).required('Required'),
    }),
    onSubmit: async (values) => {
      const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        toast.success('Qeydiyyat tamamlandı');
        navigate('/login');
      }
    },
  });

  return (
    <Container maxWidth='sm'>
      <form onSubmit={formik.handleSubmit}>
        <TextField fullWidth margin='normal' label='Name' {...formik.getFieldProps('name')} />
        <TextField fullWidth margin='normal' label='Email' {...formik.getFieldProps('email')} />
        <TextField fullWidth margin='normal' label='Password' type='password' {...formik.getFieldProps('password')} />
        <Button fullWidth variant='contained' color='primary' type='submit'>Register</Button>
      </form>
    </Container>
  );
};

export default Register;
