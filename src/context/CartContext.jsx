import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
  const [cart, setCart] = useState([]);

  function isInCart (itemId) {
    const result = cart.find((item) => item.id == itemId);
    if (result) {
      return true;
    } else {
      return false;
    }
  }

  function addItem(item, quantity) {
    if (!isInCart(item.id)) {
      setCart([...cart, {...item, quantity: quantity}]);
    } 
    else {
      const modifiedCart = cart.map((cartItem) => {
        if (cartItem.id == item.id) {
          return {...cartItem, quantity: (cartItem.quantity + quantity)};
        } else {
          return cartItem;
        }
      });
      setCart(modifiedCart);
    }
  }

  function addItem2(item, quantity) {
    if (!isInCart(item.id)) {
      setCart([...cart, {...item, quantity: quantity}]);
    } 
    else {
      const modifiedCart = cart.map((cartItem) => {
        if (cartItem.id == item.id) {
          return {...cartItem, quantity: quantity};
        } else {
          return cartItem;
        }
      });
      setCart(modifiedCart);
    }
  }

  function getCartQuantity() {
    let cartQuantity = 0;
    if (cart.length) {
      cart.forEach(item => {
        cartQuantity = cartQuantity + item.quantity;
      });
    }
    return cartQuantity;
  }

  function getItemQuantity(itemId) {
    const result = cart.find((item) => item.id == itemId);
    if (result) {
      return result.quantity;
    } else {
      return 0;
    }
  }

  function calculateTotalPrice() {
    let totalPrice = 0;
    cart.forEach(item => {
      if (item.price) {
        totalPrice = totalPrice + (item.price*item.quantity);
      } 
    }); 
    return totalPrice.toFixed(2);
  }

  function removeItem(itemId) {
    const filteredCart = cart.filter((item) => item.id != itemId);
    if (cart.length != filteredCart.length) {
      setCart(filteredCart);
    }
  }

  function clear() {
    if (cart.length != 0) {
      setCart([]);
    }
  }

  return (
    <CartContext.Provider value={{addItem, addItem2, getCartQuantity, getItemQuantity, calculateTotalPrice, removeItem, clear, cart}}>
      {children}
    </CartContext.Provider>
  );

}