import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../features/todos/todoSlice';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const EditModal = ({ todo, onClose }) => {
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (!newText.trim()) return;
    dispatch(updateTodo({ id: todo.id, newText }));
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>Edit todo</Typography>
        <TextField
          fullWidth
          label="Yeni mətn"
          variant="outlined"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3}>
          <Button onClick={onClose} color="secondary">cllose</Button>
          <Button onClick={handleSave} variant="contained" color="primary">Save Todo</Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default EditModal;
