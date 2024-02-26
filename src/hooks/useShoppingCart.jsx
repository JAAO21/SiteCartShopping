import { useEffect, useContext, useState } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext.jsx";
export const useShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(ShoppingCartContext);
  const [cartTotal,setCartTotal]=useState(0);
  const [cartAmount,setCartAmount]=useState(0);
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    isTotal();
    isAmount()
  }, [cartItems]);

  const addToCart = (newItem) => {
    console.log(newItem);
    const existingItem = cartItems.find((item) => item.id === newItem); //verifica si el value existe
    console.log(existingItem);
    if (existingItem) {
      const updateCartItems = cartItems.map((data) =>
        data.id === newItem
          ? { ...data, amount: data.amount ? data.amount + 1 : 1 }
          : data
      ); //busca y actualiza la cantidad
      console.log(updateCartItems);
      setCartItems(updateCartItems);
    } else {
      console.log("yes");
      const addNewItem = { ...newItem, amount: 1 };
      setCartItems([...cartItems, addNewItem]);
    }
  };

  const removeToCard = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const restAmount = (value) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === value ? { ...item, amount: item.amount - 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const isTotal = () => {
    const total = cartItems.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.amount,
      0
    );

    setCartTotal(total);
  };

  const isAmount = () => {
    const amount = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    );
    setCartAmount(amount) 
  };
  return {
    cartItems,
    addToCart,
    removeToCard,
    setCartItems,
    restAmount,
    cartTotal,
    cartAmount
  };
};
