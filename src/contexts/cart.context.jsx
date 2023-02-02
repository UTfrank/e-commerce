import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productsToAdd) => {
  // find if the cartItems contains productsToAdd
  const existingCartItems = cartItems.find(cartItem => cartItem.id === productsToAdd.id);

  // if found, increament quantity
  if(existingCartItems) {
    return cartItems.map(cartItem => cartItem.id === productsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem);
  }

  // return new array with modified cartItems / new cartItems
  return [...cartItems, { ...productsToAdd, quantity: 1}];

}

export const CartContext = createContext({
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});


export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems]);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = { showCart, setShowCart, addItemToCart, cartItems, cartCount };

  return (
    <CartContext.Provider value={value}>{ children }</CartContext.Provider>
  )
}