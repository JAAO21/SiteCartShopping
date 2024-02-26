import { useShoppingCart } from "../../hooks/useShoppingCart";

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
      <div
        key={index}
        style={{
          display: "grid",
          border: "1px solid white",
          flexDirection: "column",
          margin: "7px",
        }}
      >
        <p>{data?.title}</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            loading="lazy"
            src={data?.image}
            alt={data?.id}
            style={{ height: "80px", width: "80px" }}
          />
        </div>
        <p>Precio: {data?.price}</p>
        <p>Cantidad: {data?.amount}</p>
        <div>
          <button onClick={(e) => handleClickSumCount(e, data.id)}>+</button>
          <button
            onClick={(e) => handleClickRestCount(e, data.id)}
            disabled={data?.amount === 0}
          >
            -
          </button>
        </div>
        <button onClick={() => removeToCard(index)}>Eliminar</button>
      </div>
    ));
  } else {
    return <h1>NO data</h1>; //mostrar vista de carrito vacio
  }
};
export default ShoppingCartComponent;
