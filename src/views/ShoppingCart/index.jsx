import { useShoppingCart } from "../../hooks/useShoppingCart";
import ShoppingCartComponent from "../../components/ShoppingCartComponent";

const ShoppingCart = () => {
  const { cartTotal, cartAmount } = useShoppingCart();

  return (
    <div>
      <h1 style={{ fontFamily: "monospace", fontStyle: "oblique" }}>Carrito de compras productos</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            margin: "7px",
          }}
        >
          <ShoppingCartComponent />
        </div>
        <div>
          <p style={{ fontFamily: "monospace", fontStyle: "oblique",fontSize:"50px" }}>Productos</p>
          <p  style={{
                  fontFamily: "cursive",
                  fontSize: "34px",
                  fontStyle: "oblique",
                  fontWeight: "600",
                }}>Cantidad de productos:</p>
          <p  style={{
                  fontFamily: "cursive",
                  fontSize: "38px",
                  fontStyle: "oblique",
                  fontWeight: "600",
                }}>{cartAmount}</p>
          <p  style={{
                  fontFamily: "cursive",
                  fontSize: "34px",
                  fontStyle: "oblique",
                  fontWeight: "600",
                }}>Precio total:</p>
          <p  style={{
                  fontFamily: "cursive",
                  fontSize: "38px",
                  fontStyle: "oblique",
                  fontWeight: "600",
                }}>{cartTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
