import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"

import vegetableitem3 from "../../assets/images/vegetable-item-3.png"
import vegetableitem5 from "../../assets/images/vegetable-item-5.jpg"
import vegetableitem2 from "../../assets/images/vegetable-item-2.jpg"

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

interface CartState {
  items: CartItem[];
  shipping: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [
    { id: 1000, name: "Big Banana", price: 2.99, quantity: 1, img: vegetableitem3 },
    { id: 2000, name: "Potatoes", price: 2.99, quantity: 1, img: vegetableitem5 },
    { id: 3000, name: "Awesome Broccoli", price: 2.99, quantity: 1, img: vegetableitem2 }
  ],
  shipping: 3.00,
  totalQuantity: 3
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity += 1
        state.totalQuantity += 1
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
        state.totalQuantity -= 1
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        state.totalQuantity -= item.quantity
        state.items = state.items.filter(item => item.id !== action.payload)
      }
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      console.log(action.payload)
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      if (existingItem) {
        existingItem.quantity += newItem.quantity
      } else {
        state.items.push(newItem)
      }
      state.totalQuantity += newItem.quantity
    },
    initItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload
      state.totalQuantity = action.payload.reduce((total, item) => total + item.quantity, 0)
    }
  }
})

export const { incrementQuantity, decrementQuantity, removeItem, addItem, initItems } = cartSlice.actions
export default cartSlice.reducer
