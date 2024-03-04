import { useShoppingCart } from "../../hooks/useShoppingCart";
import img from "../../assets/carritoVacio.png";
const ShoppingCartComponent = () => {
  const { cartItems, removeToCard, addToCart, restAmount } = useShoppingCart();

  const arr = cartItems.flat();
  const handleClickSumCount = (e, value) => {
    //cuma la cantidad del count +1
    e.preventDefault();
    addToCart(value);
  };

  const handleClickRestCount = (e, value) => {
    //resta la cantidad del count -1
    e.preventDefault();
    restAmount(value);
  };

  if (arr.length > 0) {
    return arr.map((data, index) => (
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        margin: "7px",
      }}>
        <div
          key={index}
          style={{
            display: "grid",
            border: "1px dashed white",
            flexDirection: "column",
            margin: "7px",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontStyle: "oblique",
              fontSize: "15px",
            }}
          >
            {data?.title}
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              loading="lazy"
              src={data?.image}
              alt={data?.id}
              style={{ height: "80px", width: "80px", borderRadius: "30%" }}
            />
          </div>
          <p
            style={{
              fontFamily: "monospace",
              fontStyle: "oblique",
              fontSize: "13px",
              fontWeight: "bolder",
            }}
             loading="lazy"
          >
            Precio: {data?.price}
          </p>
          <p
            style={{
              fontFamily: "monospace",
              fontStyle: "oblique",
              fontSize: "13px",
              fontWeight: "bolder",
            }}
          >
            Cantidad: {data?.amount}
          </p>
          <div>
            <button onClick={(e) => handleClickSumCount(e, data.id)}>+</button>
            <button
              onClick={(e) => handleClickRestCount(e, data.id)}
              disabled={data?.amount === 0}
            >
              -
            </button>
          </div>
          <button
            style={{
              fontFamily: "monospace",
              fontStyle: "oblique",
              fontSize: "13px",
              fontWeight: "bolder",
            }}
            onClick={() => removeToCard(index)}
          >
            Eliminar
          </button>
        </div>
      </div>
    ));
  } else {
    return (
      <div style={{ display: "flex",justifyContent:"center", alignItems: "center",width:"100%" }}>
        <img
          style={{
            height: "250px",
            width: "260px",
            backgroundColor: "aliceblue",
            borderRadius: "30%",
          }}
          src={img}
        />
      </div>
    ); //mostrar vista de carrito vacio
  }
};
export default ShoppingCartComponent;
