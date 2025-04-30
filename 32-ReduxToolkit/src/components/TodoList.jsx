import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAll } from '../features/todos/todoSlice';
import { List, Button, Typography, Box } from '@mui/material';
import TodoItem from './TodoItem';
import Edit from './Edit';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const [editingTodo, setEditingTodo] = useState(null);

  return (
    <Box>
      {todos.length > 0 && (
        <Button variant="outlined" color="error" onClick={() => dispatch(deleteAll())} sx={{ mb: 2 }}>
          Delete All
        </Button>
      )}
      {todos.length === 0 && (
        <Typography color="text.secondary">Todo yoxdur</Typography>
      )}
      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onEdit={setEditingTodo} />
        ))}
      </List>
      {editingTodo && (
        <Edit todo={editingTodo} onClose={() => setEditingTodo(null)} />
      )}
    </Box>
  );
};

export default TodoList;
