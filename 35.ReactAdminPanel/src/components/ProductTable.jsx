import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Button
  } from '@mui/material';
  import { useDispatch, useSelector } from 'react-redux';
  import { fetchProducts, deleteProduct } from '../features/products/productSlice';
  import { useEffect } from 'react';
  import ProductModal from './ProductModal';
  import { useNavigate } from 'react-router-dom';
  
  export default function ProductTable({ setEditData }) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const navigate = useNavigate();
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((p) => (
              <TableRow key={p.id}>
                <TableCell>
                  <img
                    src={p.image}
                    alt={p.title}
                    width={50}
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/detail/${p.id}`)}
                  />
                </TableCell>
                <TableCell>{p.title}</TableCell>
                <TableCell>${p.price}</TableCell>
                <TableCell>
                  <Button color="error" onClick={() => dispatch(deleteProduct(p.id))}>Delete</Button>
                  <ProductModal editData={p} setEditData={setEditData} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  