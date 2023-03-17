/* eslint-disable array-callback-return */
import { createContext, useState, useCallback, useMemo } from "react";

const addCartItem = (cartItems, productsToAdd) => {
  // find if the cartItems contains productsToAdd
  const existingCartItems = cartItems.find(cartItem => cartItem.id === productsToAdd.id);
  // if found, increament quantity
  if(existingCartItems) {
    return cartItems.map(cartItem => cartItem.id === productsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
  }
  // return new array with modified cartItems / new cartItems
  return [...cartItems, { ...productsToAdd, quantity: 1}];

}

const removeCartItem = (cartItems, productsToRemove) => {
  const existingCartItems = cartItems.find(cartItem => cartItem.id === productsToRemove.id);

  if(existingCartItems.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productsToRemove.id);
  }

  return cartItems.map(cartItem => cartItem.id === productsToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);

}

const deleteCartItem = (cartItems, productsToDelete) => {
  return cartItems.filter(cartItem => cartItem.id !== productsToDelete.id);
}

export const CartContext = createContext({
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  cartCount: 0,
  totalPrice: 0,
});


export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addNewCount = useCallback(()=>{
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  },[cartItems]);

  const addTotalPrice = useCallback(() => {
    const newTotalPrice = cartItems.reduce((total, cartItem) => total = total + cartItem.price * cartItem.quantity, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems])
  
  useMemo(() => {
    addNewCount();
    addTotalPrice();
  }, [addNewCount, addTotalPrice]);


  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = productToRemove => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const deleteItemFromCart = productToDelete => {
    setCartItems(deleteCartItem(cartItems, productToDelete))
  }

  const value = { showCart, setShowCart, addItemToCart, removeItemFromCart, deleteItemFromCart, cartItems, cartCount, totalPrice };

  return (
    <CartContext.Provider value={value}>{ children }</CartContext.Provider>
  )
}