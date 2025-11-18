import './ProductCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext.jsx';

const ProductCard = (props) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: props.id,
      img: props.img,
      productName: props.productName,
      price: props.price,
    });
  };
  return (
    <div className="product-card">
      <div className="image-container">
        <div className="d-flex">
          <span className="discount">{props.discount}</span>
          <button className="favorite" type="button">
            <FontAwesomeIcon icon={faHeart} className="fa-heart" />
          </button>
        </div>

        <img src={props.img} alt={props.productName} className="product-image img-fluid" />
      </div>

      <h3 className="product-name">{props.productName}</h3>
      <p className="product-price">
        {props.price}{' '}
        <span className="old-price">
          <del>{props.oldPrice}</del>
        </span>
        {/* <span className="color-picker">{props.color?.join(' ')}</span> */}
      </p>
      <p className="product-sizes">
        <span>Sizes: {props.sizes?.join(', ')}</span>
        <span>
          <button className="product-button" type="button" onClick={handleAdd}>
            Add to Cart
          </button>
        </span>
      </p>
    </div>
  );
};

export default ProductCard;
