import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWishlist = createAsyncThunk('wishlist/fetch', async () => {
  const res = await fetch('http://localhost:3001/wishlist');
  return await res.json();
});

export const addToWishlist = createAsyncThunk('wishlist/add', async (product) => {
  await fetch(`http://localhost:3001/wishlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
  return product;
});

export const removeFromWishlist = createAsyncThunk('wishlist/remove', async (id) => {
  await fetch(`http://localhost:3001/wishlist/${id}`, { method: "DELETE" });
  return id;
});

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default wishlistSlice.reducer;
