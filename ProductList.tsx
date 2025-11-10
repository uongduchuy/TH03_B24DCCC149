// src/components/ProductList.tsx

import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  if (products.length === 0) return <p>Không có sản phẩm nào phù hợp với điều kiện tìm kiếm/lọc.</p>;
  return (
    <div className="grid">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
};

export default ProductList;