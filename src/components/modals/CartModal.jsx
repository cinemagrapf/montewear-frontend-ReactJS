import './CartModal.scss';
import { useCart } from '../../context/CartContext.jsx';

const CartModal = ({ onClose }) => {
  const { cartItems } = useCart();

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div
        className="cart-modal"
        onClick={(e) => e.stopPropagation()} // prevent closing
      >
        <button className="cart-close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.img} alt={item.productName} />

                <div>
                  <h4>{item.productName}</h4>
                  <p>{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartModal;
