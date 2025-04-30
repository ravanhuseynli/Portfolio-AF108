import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: uuidv4(), 
        text: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.items.find(todo => todo.id === id);
      if (todo) todo.text = newText;
    },
    deleteAll: (state) => {
      state.items = [];
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, deleteAll } = todoSlice.actions;
export default todoSlice.reducer;
