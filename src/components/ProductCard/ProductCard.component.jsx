import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../Button/Button.component";
import "./product-card.styles.scss"

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <div className="name">{ name }</div>
        <div className="price">{ price }</div>
      </div>
      <Button buttonTypes='inverted' onClick={addProductToCart}>Add To Cart</Button>
    </div>
  )
}

export default ProductCard;