import Button from "../Button/Button.component";
import "./product-card.styles.scss"

const ProductCard = ({ product }) => {
  const { name, price, imgUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imgUrl} alt={`${name}`} />
      <div className="footer">
        <div className="name">{ name }</div>
        <div className="price">{ price }</div>
      </div>
      <Button buttonTypes='inverted'>Add To Cart</Button>
    </div>
  )
}

export default ProductCard;