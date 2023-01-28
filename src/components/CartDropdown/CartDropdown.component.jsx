import Button from "../Button/Button.component"
import "./cart-dropdown.styles.scss"

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="dropdown-items" />
      <Button>Go To Cart</Button>
    </div>
  )
}

export default CartDropdown