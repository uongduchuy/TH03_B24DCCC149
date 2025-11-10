import React, { useState } from 'react';
import type { Product, Category } from '../types';

type Props = {
  initial?: Partial<Product>;
  onSubmit: (data: Omit<Product, 'id'> & { id?: string }) => void;
};

const ProductForm: React.FC<Props> = ({ initial = {}, onSubmit }) => {
  const [ten, setTen] = useState(initial.ten ?? '');
  const [danhMuc, setDanhMuc] = useState<Category>(initial.danhMuc as Category ?? 'Khác');
  const [gia, setGia] = useState<number | ''>(initial.gia ?? '');
  const [soLuong, setSoLuong] = useState<number | ''>(initial.soLuong ?? '');
  const [moTa, setMoTa] = useState(initial.moTa ?? '');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!ten || ten.trim().length < 3) e.ten = 'Tên sản phẩm bắt buộc, tối thiểu 3 ký tự';
    if (gia === '' || Number(gia) <= 0) e.gia = 'Giá phải là số dương';
    if (soLuong === '' || !Number.isInteger(Number(soLuong)) || Number(soLuong) < 0) e.soLuong = 'Số lượng phải là số nguyên không âm';
    if (!danhMuc) e.danhMuc = 'Chọn danh mục';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      id: (initial.id as string) || undefined,
      ten: ten.trim(),
      danhMuc,
      gia: Number(gia),
      soLuong: Number(soLuong),
      moTa,
    } as any);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tên</label>
        <input value={ten} onChange={e => setTen(e.target.value)} />
        {errors.ten && <small className="error">{errors.ten}</small>}
      </div>

      <div>
        <label>Danh mục</label>
        <select value={danhMuc} onChange={e => setDanhMuc(e.target.value as Category)}>
          <option value="Điện tử">Điện tử</option>
          <option value="Quần áo">Quần áo</option>
          <option value="Đồ ăn">Đồ ăn</option>
          <option value="Sách">Sách</option>
          <option value="Khác">Khác</option>
        </select>
        {errors.danhMuc && <small className="error">{errors.danhMuc}</small>}
      </div>

      <div>
        <label>Giá</label>
        <input type="number" value={gia === '' ? '' : gia} onChange={e => setGia(e.target.value === '' ? '' : Number(e.target.value))} />
        {errors.gia && <small className="error">{errors.gia}</small>}
      </div>

      <div>
        <label>Số lượng</label>
        <input type="number" value={soLuong === '' ? '' : soLuong} onChange={e => setSoLuong(e.target.value === '' ? '' : Number(e.target.value))} />
        {errors.soLuong && <small className="error">{errors.soLuong}</small>}
      </div>

      <div>
        <label>Mô tả</label>
        <textarea value={moTa} onChange={e => setMoTa(e.target.value)} />
      </div>

      <button type="submit">Lưu</button>
    </form>
  );
};

export default ProductForm;
