import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { TextField, Button, Box, Typography, Stack } from '@mui/material';

const AuthForm = ({ mode, setAuthMode }) => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string()
      .required('Password required')
      .min(6, 'Min 6 characters')
      .matches(/[a-z]/, 'At least one lowercase')
      .matches(/[A-Z]/, 'At least one uppercase')
      .matches(/\d/, 'At least one number'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const { email, password } = values;

    if (mode === "register") {
      const res = await fetch(`http://localhost:3001/users?email=${email}`);
      const existing = await res.json();
      if (existing.length > 0) return toast.error("User already exists");

      const newUser = { id: uuidv4(), email, password };
      await fetch(`http://localhost:3001/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      dispatch(setUser(newUser));
      toast.success("Registered successfully");
      setAuthMode(null);
    }

    if (mode === "login") {
      const res = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
      const data = await res.json();
      if (data.length === 0) return toast.error("Wrong credentials");

      dispatch(setUser(data[0]));
      toast.success("Logged in");
      setAuthMode(null);
    }

    resetForm();
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" mb={2}>{mode === "register" ? "Register" : "Login"}</Typography>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Stack spacing={2}>
              <Field name="email" as={TextField} label="Email" fullWidth helperText={<ErrorMessage name="email" />} />
              <Field name="password" as={TextField} type="password" label="Password" fullWidth helperText={<ErrorMessage name="password" />} />
              <Button type="submit" variant="contained">
                {mode === "register" ? "Register" : "Login"}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AuthForm;
