import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const ProductDetail = ({ product }) => {
  if (!product) return <Typography textAlign="center">Product not found</Typography>;

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            ${product.price}
          </Typography>
          <Typography sx={{ mt: 2 }}>{product.description}</Typography>
          <Typography sx={{ mt: 1 }}><strong>Category:</strong> {product.category}</Typography>
          <Typography sx={{ mt: 1 }}>
            <strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetail;
