import React from 'react';
import { useCart } from '../../context/CartContext.jsx';
import './CartModal.scss';

const CartModal = ({ onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [isClosing, setIsClosing] = React.useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div
      className={`cart-modal-overlay ${isClosing ? 'closing' : ''}`}
      onClick={handleOverlayClick}>
      <div
        className={`cart-modal ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}>
        <button className="cart-close-btn" onClick={handleClose} aria-label="Close cart">
          ✕
        </button>

        <h2>Your Cart ({cartItems.length})</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <p>Your cart is empty</p>
            <button className="continue-shopping" onClick={handleClose}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.cartId} className="cart-item">
                  <img src={item.img} alt={item.productName} />

                  <div className="cart-item-details">
                    <h4>{item.productName}</h4>
                    <p className="item-price">${item.price}</p>

                    <div className="quantity-controls">
                      <button
                        onClick={() => handleQuantityChange(item.cartId, item.quantity - 1)}
                        aria-label="Decrease quantity">
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.cartId, item.quantity + 1)}
                        aria-label="Increase quantity">
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.cartId)}
                    aria-label="Remove item">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-modal-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span className="total-amount">${getCartTotal()}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
