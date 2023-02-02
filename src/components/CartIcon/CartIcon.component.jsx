import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

import "./cart-icon.styles.scss"

const CartIcon = () => {
  const { showCart, setShowCart, cartCount } = useContext(CartContext);
  const handleShowCart = () => {
    setShowCart(!showCart);
  }
  return (
    <div className="cart-icon-container" onClick={ handleShowCart } >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{ cartCount }</span>
    </div>
  )
}

export default CartIcon