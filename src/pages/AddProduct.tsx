import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductForm from '../components/ProductForm';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

const AddProduct: React.FC = () => {
  const { dispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleSubmit = (data: any) => {
    const newProduct = { ...data, id: uuid() };
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
    navigate('/');
  };

  return (
    <div>
      <h2>Thêm sản phẩm</h2>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;
