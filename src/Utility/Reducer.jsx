import { Type } from "./Action.type";

export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((total, item) => total + item.price * item.amount, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.item.id
              ? { ...item, amount: item.amount + 1 }
              : item
          ),
        };
      }

    case Type.INCREMENT_ITEM:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.itemId
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };

    case Type.DECREMENT_ITEM:
      return {
        ...state,
        basket: state.basket
          .map((item) =>
            item.id === action.itemId
              ? { ...item, amount: Math.max(1, item.amount - 1) }
              : item
          )
          .filter((item) => item.amount > 0),
      };

    case Type.REMOVE_ITEM:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.itemId),
      };

    default:
      return state;
  }
};

