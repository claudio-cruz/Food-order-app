import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
})

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIdex = state.items.findIndex(
      (item) => item.id === action.item.id
    )

    const updatedItems = [...state.items]

    if (existingCartItemIdex > -1) {
      const existingItem = state.items[existingCartItemIdex]
      const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity + 1
      }
      updatedItem[existingCartItemIdex] = updatedItem
    } else {
      updatedItems.push({ ...action.item, quantity: 1 })
    }

    return { ...state, items: updatedItems }
  }

  if (action.type === 'REMOVE_ITEM') {

  }
  return state
}

export function CartcontextProvider({ children }) {
  useReducer()

  return <CartContext.Provider>{children}</CartContext.Provider>
}

export default CartContext;