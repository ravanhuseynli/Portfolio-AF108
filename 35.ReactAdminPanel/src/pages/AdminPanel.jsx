import { Container, Typography } from '@mui/material';
import ProductTable from '../components/ProductTable';
import ProductModal from '../components/ProductModal';

export default function AdminPanel() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Admin Panel</Typography>
      <ProductModal />
      <ProductTable />
    </Container>
  );
}
