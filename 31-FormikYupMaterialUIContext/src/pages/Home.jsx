
import React, { useContext } from 'react';
import { Grid, Container } from '@mui/material';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
