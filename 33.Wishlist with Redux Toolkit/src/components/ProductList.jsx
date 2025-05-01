import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productSlice';
import { fetchWishlist, addToWishlist, removeFromWishlist } from '../features/wishlist/wishlistSlice';
import { Grid, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const ProductList = () => {
  const dispatch = useDispatch();
  const { items: products } = useSelector(state => state.products);
  const wishlist = useSelector(state => state.wishlist.items);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchWishlist());
  }, [dispatch]);

  const isInWishlist = (id) => wishlist.some(item => item.id === id);

  const toggleWishlist = (product) => {
    isInWishlist(product.id)
      ? dispatch(removeFromWishlist(product.id))
      : dispatch(addToWishlist(product));
  };

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia component="img" height="240" image={product.image} />
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography>${product.price}</Typography>
              <IconButton onClick={() => toggleWishlist(product)}>
                {isInWishlist(product.id) ? <Favorite color="error" /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
