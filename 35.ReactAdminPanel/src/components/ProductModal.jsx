import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../features/products/productSlice';

export default function ProductModal({ editData }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const isEdit = Boolean(editData);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{isEdit ? 'Edit' : 'Add Product'}</Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{isEdit ? 'Edit Product' : 'Add Product'}</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              id: editData?.id || undefined,
              title: editData?.title || '',
              price: editData?.price || '',
              image: editData?.image || '',
            }}
            onSubmit={(values) => {
              if (isEdit) dispatch(updateProduct(values));
              else dispatch(addProduct(values));
              setOpen(false);
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <TextField label="Title" name="title" fullWidth margin="dense" value={values.title} onChange={handleChange} />
                <TextField label="Price" name="price" fullWidth margin="dense" value={values.price} onChange={handleChange} />
                <TextField label="Image URL" name="image" fullWidth margin="dense" value={values.image} onChange={handleChange} />
                <DialogActions>
                  <Button onClick={() => setOpen(false)}>Cancel</Button>
                  <Button type="submit">{isEdit ? 'Update' : 'Add'}</Button>
                </DialogActions>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
}
