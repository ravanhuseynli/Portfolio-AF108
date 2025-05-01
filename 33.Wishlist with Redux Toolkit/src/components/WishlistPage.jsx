import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishlist, removeFromWishlist } from '../features/wishlist/wishlistSlice';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {wishlist.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia component="img" height="240" image={product.image} />
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography>${product.price}</Typography>
              <Button
                variant="contained"
                color="error"
                onClick={() => dispatch(removeFromWishlist(product.id))}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default WishlistPage;
