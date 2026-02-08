

// import { Type } from "./Action.type";

// export const initialState = {
//   basket: [],
//   user: null,
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case Type.SET_USER:
//       return { ...state, user: action.user };

//     case Type.ADD_TO_BASKET: {
//       const existing = state.basket.find((i) => i.id === action.item.id);
//       if (!existing) {
//         return {
//           ...state,
//           basket: [...state.basket, { ...action.item, amount: 1 }],
//         };
//       }
//       return {
//         ...state,
//         basket: state.basket.map((i) =>
//           i.id === action.item.id ? { ...i, amount: i.amount + 1 } : i,
//         ),
//       };
//     }

//     case Type.INCREMENT_ITEM:
//       return {
//         ...state,
//         basket: state.basket.map((i) =>
//           i.id === action.itemId ? { ...i, amount: i.amount + 1 } : i,
//         ),
//       };

//     case Type.DECREMENT_ITEM:
//       return {
//         ...state,
//         basket: state.basket
//           .map((i) =>
//             i.id === action.itemId
//               ? { ...i, amount: Math.max(1, i.amount - 1) }
//               : i,
//           )
//           .filter((i) => i.amount > 0),
//       };

//     case Type.REMOVE_ITEM:
//       return {
//         ...state,
//         basket: state.basket.filter((i) => i.id !== action.itemId),
//       };

//     default:
//       return state;
//   }
// };
import { Type } from "./Action.type";

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.SET_USER:
      return { ...state, user: action.user };

    case Type.ADD_TO_BASKET: {
      const existing = state.basket.find((i) => i.id === action.item.id);
      if (!existing) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      }
      return {
        ...state,
        basket: state.basket.map((i) =>
          i.id === action.item.id ? { ...i, amount: i.amount + 1 } : i,
        ),
      };
    }

    case Type.INCREMENT_ITEM:
      return {
        ...state,
        basket: state.basket.map((i) =>
          i.id === action.itemId ? { ...i, amount: i.amount + 1 } : i,
        ),
      };

    case Type.DECREMENT_ITEM:
      return {
        ...state,
        basket: state.basket.map((i) =>
          i.id === action.itemId
            ? { ...i, amount: Math.max(1, i.amount - 1) }
            : i,
        ),
      };

    case Type.REMOVE_ITEM:
      return {
        ...state,
        basket: state.basket.filter((i) => i.id !== action.itemId),
      };

    default:
      return state;
  }
};
