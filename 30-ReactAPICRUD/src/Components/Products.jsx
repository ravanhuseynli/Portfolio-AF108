import { useState } from 'react';
import Product from './Product';
import AddProduct from './AddProduct';

function Products({ products, setProducts }) {
  const [editProduct, setEditProduct] = useState(null);

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const handleDeleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleReset = () => {
    setProducts([]);
  };

  return (
    <div>
      <AddProduct onAdd={handleAddProduct} />

      <button className="btn btn-danger my-3" onClick={handleReset}>
        Reset
      </button>

      <table className="table table-striped">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <Product 
              // key={product.id} 
              product={product} 
              onDelete={handleDeleteProduct} 
              onEdit={setEditProduct} 
              onUpdate={handleUpdateProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
