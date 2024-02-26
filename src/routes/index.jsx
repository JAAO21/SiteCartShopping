import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home/index.jsx";
import ShoppingCart from "../views/ShoppingCart/index.jsx";
import { ShoppingCartProvider } from "../context/ShoppingCartContext.jsx";
const Handleroutes = () => {
  return (
    <BrowserRouter>
        <ShoppingCartProvider>
      <Routes>
          <Route exact path="/" element={<Home/>} />

          <Route path="/ShoppingCart" element={<ShoppingCart/>} />
      </Routes>
        </ShoppingCartProvider>
    </BrowserRouter>
  );
};

export default Handleroutes;
