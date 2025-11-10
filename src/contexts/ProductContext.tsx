import { createContext, useReducer } from 'react'; 
import type { ReactNode, Dispatch } from 'react'; // type cho ReactNode, Dispatch
import type { Product } from '../types'; 
import { initialProducts } from '../data/initialProducts';
type State = {
  products: Product[];
};

type Action =
  | { type: 'ADD_PRODUCT'; payload: Product }      // Thêm sản phẩm
  | { type: 'UPDATE_PRODUCT'; payload: Product }   // Cập nhật sản phẩm
  | { type: 'DELETE_PRODUCT'; payload: string };  // Xóa sản phẩm

const initialState: State = {
  products: initialProducts,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [action.payload, ...state.products] };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(p => (p.id === action.payload.id ? action.payload : p)),
      };
    case 'DELETE_PRODUCT':
      return { ...state, products: state.products.filter(p => p.id !== action.payload) };
    default:
      return state;
  }
};

type ProductContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const ProductContext = createContext<ProductContextType>({
  state: initialState,
  dispatch: () => null,
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children} // State phải được chia sẻ giữa các component
    </ProductContext.Provider>
  );
};