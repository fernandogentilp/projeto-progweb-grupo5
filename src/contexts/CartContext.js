import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = { items: [] };

function reducer(state, action) {
  switch(action.type) {
    case 'ADD':
      {
        const item = action.payload;
        const exists = state.items.find(i => i.id === item.id);
        if(exists) {
          return {
            ...state,
            items: state.items.map(i => i.id === item.id ? {...i, qty: i.qty + 1} : i)
          };
        }
        return {...state, items: [...state.items, {...item, qty:1}]};
      }
    case 'REMOVE':
      return {...state, items: state.items.filter(i => i.id !== action.payload)};
    case 'SET_QTY':
      return {...state, items: state.items.map(i => i.id === action.payload.id ? {...i, qty: action.payload.qty} : i)};
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

export function CartProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const add = (p) => dispatch({type:'ADD', payload:p});
  const remove = (id) => dispatch({type:'REMOVE', payload:id});
  const setQty = (id, qty) => dispatch({type:'SET_QTY', payload:{id,qty}});
  const clear = () => dispatch({type:'CLEAR'});
  return <CartContext.Provider value={{state, add, remove, setQty, clear}}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext);
}
