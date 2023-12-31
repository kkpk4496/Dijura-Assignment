import {Component} from 'react'
import CartContext from '../../context/CartContext'

class BooksCard extends Component {
  state = {cartData: []}

  addToCart = () => {
    const {data} = this.props
    this.setState(prevState => ({cartData: [...prevState.cartData, data]}))
  }

  render() {
    const {data} = this.props
    const {imageLink, title} = data
    const {cartData} = this.state
    return (
      <CartContext.Provider value={{cartData, addToCart: this.addToCart}}>
        <div className="list-container">
          <img src={imageLink} alt="ig" className="image" />
          <p>{title}</p>
          <button
            type="button"
            className="login-button"
            onClick={this.addToCart}
          >
            Add to Cart
          </button>
        </div>
      </CartContext.Provider>
    )
  }
}

export default BooksCard
