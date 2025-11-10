import React, { useContext, useMemo, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import type { Category } from '../types';

const ITEMS_PER_PAGE = 6;

const Home: React.FC = () => {
  const { state } = useContext(ProductContext);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category | 'Tất cả'>('Tất cả');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = state.products;

    // search
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(p => p.ten.toLowerCase().includes(q));
    }

    // category
    if (category !== 'Tất cả') {
      list = list.filter(p => p.danhMuc === category);
    }

    // price range
    if (minPrice !== '') list = list.filter(p => p.gia >= Number(minPrice));
    if (maxPrice !== '') list = list.filter(p => p.gia <= Number(maxPrice));

    return list;
  }, [state.products, query, category, minPrice, maxPrice]);

  // pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const pagedItems = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // ensure page is valid when filters change
  React.useEffect(() => {
    setPage(1);
  }, [query, category, minPrice, maxPrice]);

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} />
      <FilterBar
        category={category}
        setCategory={setCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />

      <p>Tổng số sản phẩm: {filtered.length} — Trang {page} / {totalPages}</p>

      <ProductList products={pagedItems} />

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Home;
