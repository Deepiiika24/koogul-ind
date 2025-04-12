import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  shipping: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  shipping: 3.00,
  totalQuantity: 0
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
