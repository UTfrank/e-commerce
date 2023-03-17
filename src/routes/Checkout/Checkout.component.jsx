import { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  // console.log(cartItems.length);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block"><span>Product</span></div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems && cartItems.map((cartItem) => {
        return (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        );
      })}

      <span className="total">Total: ${totalPrice}</span>
    </div>
  );
};

export default Checkout;
