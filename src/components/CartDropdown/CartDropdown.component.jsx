import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../contexts/cart.context"
import Button from "../Button/Button.component"
import CartItem from "../CartItem/CartItem.component"
import "./cart-dropdown.styles.scss"

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const handleGoToCart = () => navigate("/checkout")

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      
      <Button onClick={handleGoToCart}>Go To Cart</Button>
    </div>
  )
}

export default CartDropdown