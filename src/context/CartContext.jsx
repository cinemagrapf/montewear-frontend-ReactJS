import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CART_STORAGE_KEY = 'shopping_cart_items';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize from localStorage
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      // Check if product already exists
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        // Increase quantity
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        // Add new item with unique cartId and quantity
        return [
          ...prev,
          {
            ...product,
            cartId: `${product.id}_${Date.now()}`,
            quantity: 1,
          },
        ];
      }
    });
  };

  const removeFromCart = (cartId) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(cartId);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) => (item.cartId === cartId ? { ...item, quantity: newQuantity } : item)),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemsCount,
      }}>
      {children}
    </CartContext.Provider>
  );
};
