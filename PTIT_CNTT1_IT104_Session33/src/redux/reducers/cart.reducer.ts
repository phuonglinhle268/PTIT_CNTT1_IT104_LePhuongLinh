import { ADD_TO_CART, DELETE_ITEM, UPDATE_QUANTITY } from "../constants/type";

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart') || '[]') as { id: number; name: string; price: number; quantity: number }[],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const exist = state.cart.find((item) => item.id === action.payload.id);
      if (exist) {
        const newQuantity = Math.max(1, exist.quantity + 1);
        const updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: newQuantity }
            : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      }
      const newCart = [...state.cart, { ...action.payload, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };
    }

    case UPDATE_QUANTITY:
      { const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      }; }

    case DELETE_ITEM:
      { const filteredCart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(filteredCart));
      return {
        ...state,
        cart: filteredCart,
      }; }

    default:
      return state;
  }
};

export default cartReducer;