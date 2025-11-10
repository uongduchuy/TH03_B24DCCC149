import React from 'react';
import type { Category } from '../types';

type Props = {
  category: Category | 'Tất cả';
  setCategory: (c: Category | 'Tất cả') => void;
  minPrice: number | '';
  maxPrice: number | '';
  setMinPrice: (v: number | '') => void;
  setMaxPrice: (v: number | '') => void;
};

const FilterBar: React.FC<Props> = ({ category, setCategory, minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  return (
    <div className="filter-bar">
      <select value={category} onChange={e => setCategory(e.target.value as any)}>
        <option value="Tất cả">Tất cả</option>
        <option value="Điện tử">Điện tử</option>
        <option value="Quần áo">Quần áo</option>
        <option value="Đồ ăn">Đồ ăn</option>
        <option value="Sách">Sách</option>
        <option value="Khác">Khác</option>
      </select>

      <input type="number" placeholder="Min giá" value={minPrice === '' ? '' : minPrice} onChange={e => setMinPrice(e.target.value === '' ? '' : Number(e.target.value))} />
      <input type="number" placeholder="Max giá" value={maxPrice === '' ? '' : maxPrice} onChange={e => setMaxPrice(e.target.value === '' ? '' : Number(e.target.value))} />
    </div>
  );
};

export default FilterBar;

