import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductForm from '../components/ProductForm';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct: React.FC = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  const product = state.products.find(p => p.id === id);
  if (!product) return <p>Không tìm thấy sản phẩm</p>;

  const handleSubmit = (data: any) => {
    const updated = { ...product, ...data, id: product.id };
    dispatch({ type: 'UPDATE_PRODUCT', payload: updated });
    navigate(`/products/${product.id}`);
  };

  return (
    <div>
      <h2>Sửa sản phẩm</h2>
      <ProductForm initial={product} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditProduct;

