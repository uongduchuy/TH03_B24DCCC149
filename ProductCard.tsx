import React, { useContext } from 'react';
import type { Product } from '../types';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  const handleDelete = () => {
    if (confirm(`Bạn có chắc muốn xóa sản phẩm '${product.ten}'?`)) {
      dispatch({ type: 'DELETE_PRODUCT', payload: product.id });
    }
  };

  return (
    <div className="card">
      <h3>{product.ten}</h3>
      <p>{product.danhMuc} • {product.soLuong} cái</p>
      <p>Giá: {product.gia.toLocaleString('vi-VN')}₫</p>
      <div className="actions">
        <Link to={`/products/${product.id}`}>Xem</Link>
        <button onClick={() => navigate(`/edit/${product.id}`)}>Sửa</button>
        <button onClick={handleDelete}>Xóa</button>
      </div>
    </div>
  );
};

export default ProductCard;