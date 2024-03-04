import { useNavigate   } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts.jsx";

import { useShoppingCart } from "../../hooks//useShoppingCart.jsx";

import FilterCategories from "../../components/FilterCategories/index.jsx";
import FilterPrices from "../../components/FilterPrices/index.jsx";
import Loading from "../../components/Loading/index.jsx";

import ImgCart from "../../assets/carrito.png"

function Home() {
  const navigate  = useNavigate();
  const { loading, copyData, setCopyData, products } = useProducts();
  const { addToCart } = useShoppingCart();

  if (loading) return <Loading />;

  const handleClickAddToCard = (e, id) => {
    e.preventDefault();
    const newArr = copyData.filter((item) => item.id === id); //filtra por id la data que tenga el id del producto
    addToCart(newArr); //agrega al stock del carro el nuevo dato
  };

  const handleCLickCart = () => {

    navigate("/ShoppingCart");
 
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "grid",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img style={{width:"100px",height:"80px",cursor:"pointer"}} onClick={handleCLickCart} src={ImgCart} alt="cart"/>
        </div>
        <div>
          <h1 style={{ fontFamily: "monospace", fontStyle: "oblique" }}>
            Tienda Online JAAO
          </h1>
        </div>
      </div>

      <h1 style={{ fontFamily: "monospace", fontStyle: "oblique" }}>
        Filtro de categorias
      </h1>
      <FilterCategories
        dataProducts={copyData}
        setDataProducts={setCopyData}
        productsOriginal={products}
      />
      <h1 style={{ fontFamily: "monospace", fontStyle: "oblique" }}>
        Filtro de precios
      </h1>
      <FilterPrices
        dataProducts={copyData}
        setDataProducts={setCopyData}
        productsOriginal={products}
      />
      {copyData?.map((d, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "12px",
            padding: "8px",
          }}
        >
          <h1 style={{ fontFamily: "monospace", fontStyle: "oblique" }}>
            {d.title}
          </h1>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ height: "105px", width: "111px" }}>
                <img
                  loading="lazy"
                  src={d.image}
                  alt={d.id}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "15px",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "cursive",
                  fontSize: "18px",
                  fontStyle: "oblique",
                  fontWeight: "600",
                }}
              >
                {d.price}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "cursive",
                  fontSize: "15px",
                  fontStyle: "oblique",
                }}
              >
                {d.description}
              </p>
              <button onClick={(e) => handleClickAddToCard(e, d.id)}>
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
      <p
        style={{
          fontFamily: "fangsong",
          fontSize: "16px",
          fontStyle: "italic",
        }}
      >
        Copyrigth @jaao21{" "}
      </p>
    </div>
  );
}

export default Home;
