import { useState } from 'react';
import Modal from './Modal';
import { toast } from 'react-toastify';

function Product({ product, onDelete, onEdit, onUpdate }) {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    onDelete(product.id);
    toast.info("Products deleted!");
  };

  return (
    <>
      <tr>
        {/* <td>{product.id}</td> */}
        <td>{product.title}</td>
        <td>${product.price}</td>
        <td>
          <button className="btn btn-primary btn-sm me-2" onClick={() => setOpen(true)}>
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>

      {open && (
        <Modal 
          product={product} 
          closeModal={() => setOpen(false)} 
          onUpdate={onUpdate}
        />
      )}
    </>
  );
}

export default Product;
