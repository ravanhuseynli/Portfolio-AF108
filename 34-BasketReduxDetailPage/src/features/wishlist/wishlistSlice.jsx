import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Wishlist....
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem: (state, action) => {
      
      const existingProduct = state.items.find((item) => item.id === action.payload.id);
      if (!existingProduct) {
        state.items.push(action.payload); // tenisini elave etmek
      }
    },
    removeItem: (state, action) => {
      // Wishlistde delete etmek
      state.items = state.items.filter((item) => item.id !== action.payload.id); // Ürünü listeden çıkarıyoruz
    },
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
