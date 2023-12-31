import CartContext from '../../context/CartContext'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartData} = value
      console.log(cartData)
      const cartLength = cartData.length === 0

      return <ul>{cartLength ? <h1>Cart Empty</h1> : <h1>Hi</h1>}</ul>
    }}
  </CartContext.Consumer>
)

export default Cart
