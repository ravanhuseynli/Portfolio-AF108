import { useState } from 'react';
import { toast } from 'react-toastify';

function AddProduct({ onAdd }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      title,
      price: parseFloat(price),
    };
    onAdd(newProduct);
    toast.success("Product added!");
    setTitle('');
    setPrice('');
  };

  return (
    <form className="d-flex gap-2 mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="number"
        className="form-control"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <button type="submit" className="btn btn-success">Add</button>
    </form>
  );
}

export default AddProduct;
