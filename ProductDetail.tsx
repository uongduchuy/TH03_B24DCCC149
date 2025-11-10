import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { state } = useContext(ProductContext);
  const product = state.products.find(p => p.id === id);

  if (!product) return <p>Sản phẩm không tìm thấy</p>;

  return (
    <div>
      <h2>{product.ten}</h2>
      <p>Danh mục: {product.danhMuc}</p>
      <p>Giá: {product.gia}</p>
      <p>Số lượng: {product.soLuong}</p>
      <p>Mô tả: {product.moTa}</p>
      <Link to={`/edit/${product.id}`}>Sửa</Link>
      <Link to="/">Quay về</Link>
    </div>
  );
};

export default ProductDetail;
