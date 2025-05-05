import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const URL = 'http://localhost:3000/products'; // JSON Server URL

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await axios.get(URL);
  return res.data;
});

export const deleteProduct = createAsyncThunk('products/delete', async (id) => {
  await axios.delete(`${URL}/${id}`);
  toast.success('Product deleted!');
  return id;
});

export const addProduct = createAsyncThunk('products/add', async (product) => {
  const res = await axios.post(URL, product);
  toast.success('Product added!');
  return res.data;
});

export const updateProduct = createAsyncThunk('products/update', async (product) => {
  const res = await axios.put(`${URL}/${product.id}`, product);
  toast.success('Product updated!');
  return res.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: { items: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload);
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(p => p.id === action.payload.id);
        state.items[index] = action.payload;
      });
  },
});

export default productSlice.reducer;
