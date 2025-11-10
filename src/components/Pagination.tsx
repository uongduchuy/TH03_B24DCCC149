import React from 'react';

const Pagination: React.FC<{ page: number; setPage: (n: number) => void; totalPages: number }> = ({ page, setPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="pagination">
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</button>
      {pages.map(p => (
        <button key={p} onClick={() => setPage(p)} style={{ fontWeight: p === page ? 'bold' : 'normal' }}>{p}</button>
      ))}
      <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Pagination;

