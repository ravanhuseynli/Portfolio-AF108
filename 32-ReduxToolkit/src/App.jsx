import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Redux TodoList
      </Typography>
      <TodoForm />
      <TodoList />
    </Container>
  );
}

export default App;
