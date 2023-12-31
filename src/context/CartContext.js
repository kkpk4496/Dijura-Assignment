import React from 'react'

const CartContext = React.createContext({
  cartData: [],
  addToCart: () => {},
})

export default CartContext
