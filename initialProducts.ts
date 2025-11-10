import type { Product } from '../types';
import { v4 as uuid } from 'uuid';

export const initialProducts: Product[] = [
  { id: uuid(), ten: 'iPhone 15 Pro', danhMuc: 'Điện tử', gia: 25000000, soLuong: 10, moTa: 'Smartphone cao cấp' },
  { id: uuid(), ten: 'Tai nghe Bluetooth', danhMuc: 'Điện tử', gia: 800000, soLuong: 30, moTa: 'Không dây, chống ồn' },
  { id: uuid(), ten: 'Áo Thun Nam', danhMuc: 'Quần áo', gia: 150000, soLuong: 50, moTa: 'Cotton mát' },
  { id: uuid(), ten: 'Quần Jean Nữ', danhMuc: 'Quần áo', gia: 320000, soLuong: 20, moTa: 'Co giãn' },
  { id: uuid(), ten: 'Bánh Trung Thu', danhMuc: 'Đồ ăn', gia: 120000, soLuong: 40, moTa: 'Hộp 4 bánh' },
  { id: uuid(), ten: 'Sữa Chua', danhMuc: 'Đồ ăn', gia: 20000, soLuong: 120, moTa: 'Sản phẩm tươi' },
  { id: uuid(), ten: 'Lập trình TypeScript', danhMuc: 'Sách', gia: 180000, soLuong: 15, moTa: 'Sách kỹ thuật' },
  { id: uuid(), ten: 'Hobbit', danhMuc: 'Sách', gia: 90000, soLuong: 10, moTa: 'Tiểu thuyết' },
  { id: uuid(), ten: 'Bàn phím cơ', danhMuc: 'Điện tử', gia: 1500000, soLuong: 12, moTa: 'Keycaps PBT' },
  { id: uuid(), ten: 'Ly sứ', danhMuc: 'Khác', gia: 50000, soLuong: 60, moTa: 'Ly uống trà' },
];
