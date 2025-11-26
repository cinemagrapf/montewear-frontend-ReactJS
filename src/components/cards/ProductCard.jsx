import './ProductCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext.jsx';
import { useState } from 'react';

const ProductCard = (props) => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const handleAdd = () => {
    addToCart({
      id: props.id,
      img: props.img,
      productName: props.productName,
      price: props.price,
    });

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  function calculateDiscount(oldPrice, price) {
    if (!oldPrice || oldPrice <= price) return 0;
    return Math.round(((oldPrice - price) / oldPrice) * 100);
  }

  return (
    <div className="product-card">
      {showPopup && <div className="popup">Added to cart!</div>}

      <div className="image-container">
        <div className="d-flex">
          {props.oldPrice == null ? null : (
            <span className="discount">Save {calculateDiscount(props.oldPrice, props.price)}%</span>
          )}

          <button className="favorite" type="button">
            <FontAwesomeIcon icon={faHeart} className="fa-heart" />
          </button>
        </div>

        <img src={props.img} alt={props.productName} className="product-image img-fluid" />
      </div>

      <h3 className="product-name">{props.productName}</h3>
      <p className="product-price">
        ${props.price}{' '}
        {props.oldPrice == null ? null : (
          <span className="old-price">
            <del>${props.oldPrice}</del>
          </span>
        )}
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
