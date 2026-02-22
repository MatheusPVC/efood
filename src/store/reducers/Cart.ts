import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../pages/Home'

type CartState = {
  items: Prato[]
  isOpen: boolean
  cartState: number
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  cartState: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)
      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert('Este prato já está no carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
      state.cartState = 0
    },
    clear: (state) => {
      state.items = []
    },
    setCartState: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0 && action.payload < 4) {
        state.cartState = action.payload
      }
    }
  }
})

export const { add, remove, open, close, setCartState, clear } =
  cartSlice.actions

export default cartSlice.reducer
