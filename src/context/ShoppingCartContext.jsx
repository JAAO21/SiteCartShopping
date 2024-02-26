import React, { useState,useEffect } from "react";

const ShoppingCartContext = React.createContext({});
export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [dataLocalStorage,setDataLocalStorage] = useState(() =>
    (JSON.parse(localStorage.getItem("cartItems")))
  );
   useEffect(() => {
    if (dataLocalStorage) {
     setCartItems(dataLocalStorage)
    }
  }, [dataLocalStorage,setCartItems]); 
 
  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, setCartItems, dataLocalStorage }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};


export default ShoppingCartContext;
