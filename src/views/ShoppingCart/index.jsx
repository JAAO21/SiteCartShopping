import { useNavigate   } from "react-router-dom";
import { useShoppingCart } from "../../hooks/useShoppingCart";

import ShoppingCartComponent from "../../components/ShoppingCartComponent";

import img from "../../assets/flecha-izquierda.png";
const ShoppingCart = () => {
  const navigate  = useNavigate();
  const { cartTotal, cartAmount } = useShoppingCart();

  const handleCLickHome = () => {

    navigate("/");
  };


  return (
    <div >
      <div style={{ display: "flex",width:"100%" }}>
        <img
          src={img}
          onClick={handleCLickHome}
          style={{
            height: "50px",
            width: "60px",
            backgroundColor: "aliceblue",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          loading="lazy"
        />
      </div>
      <h1 style={{ fontFamily: "monospace", fontStyle: "oblique" }}>
        Carrito de compras productos
      </h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
     
          <ShoppingCartComponent />
       
        <div>
          <p
            style={{
              fontFamily: "monospace",
              fontStyle: "oblique",
              fontSize: "50px",
            }}
          >
            Productos
          </p>
          <p
            style={{
              fontFamily: "cursive",
              fontSize: "34px",
              fontStyle: "oblique",
              fontWeight: "600",
            }}
          >
            Cantidad de productos:
          </p>
          <p
            style={{
              fontFamily: "cursive",
              fontSize: "38px",
              fontStyle: "oblique",
              fontWeight: "600",
            }}
          >
            {cartAmount}
          </p>
          <p
            style={{
              fontFamily: "cursive",
              fontSize: "34px",
              fontStyle: "oblique",
              fontWeight: "600",
            }}
          >
            Precio total:
          </p>
          <p
            style={{
              fontFamily: "cursive",
              fontSize: "38px",
              fontStyle: "oblique",
              fontWeight: "600",
            }}
          >
            {cartTotal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
