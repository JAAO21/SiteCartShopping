import { functionFilters } from "../../Functions/FunctionFilters";

const FilterPrices = ({ dataProducts, setDataProducts, productsOriginal }) => {
  const handlePrices = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const dataFilter = functionFilters(
      dataProducts,
      "Prices",
      value,
      productsOriginal,
      checked
    );
    setDataProducts(dataFilter);
  };

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        gridTemplateColumns: " repeat(4,1fr)",
      }}
    >
      {dataProducts?.map((data, index) => (
        <form
          style={{ width: "auto", margin: "5px", padding: "8px" }}
          key={index}
        >
          <input
          style={{cursor:"pointer"}}
            type="checkbox"
            id={data.price}
            name={data.price}
            value={data.price}
            onChange={handlePrices}
          />

          <p style={{fontFamily:"cursive", fontSize:"18px",fontStyle:"oblique",fontWeight:"600"}}>
            {data.price}
          </p>
        </form>
      ))}
    </div>
  );
};

export default FilterPrices;
