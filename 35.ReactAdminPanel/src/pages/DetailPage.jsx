import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductDetail from '../components/ProductDetail';

export default function DetailPage() {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === Number(id))
  );

  return <ProductDetail product={product} />;
}
