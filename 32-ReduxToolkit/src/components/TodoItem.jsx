import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todos/todoSlice';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" onClick={() => onEdit(todo)}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" onClick={() => dispatch(deleteTodo(todo.id))}>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText primary={todo.text} />
    </ListItem>
  );
};

export default TodoItem;
