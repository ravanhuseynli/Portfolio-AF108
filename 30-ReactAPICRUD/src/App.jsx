import { useEffect, useState } from 'react';
import Products from './Components/Products';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      toast.error("API-dən mal çəkə bilmədim qaqa!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-5">
      <ToastContainer />
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Yüklənir...</span>
          </div>
        </div>
      ) : (
        <Products products={products} setProducts={setProducts} />
      )}
    </div>
  );
}

export default App;
