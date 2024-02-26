import { useProducts } from "../../hooks/useProducts.jsx";
import { functionFilters } from "../../Functions/FunctionFilters/index.jsx";

const FilterCategories = ({
  dataProducts,
  setDataProducts,
  productsOriginal,
}) => {
  const { products } = useProducts("categories");
  const handleCategory = (e) => {
    const textContent = e.target.textContent;
    const dataFilter = functionFilters(
      dataProducts,
      "Categories",
      textContent,
      productsOriginal
    ); //obtiene los productos por categoria
    setDataProducts(dataFilter);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {products?.map((data, index) => (
        <div
          style={{margin: "5px" }}
          onClick={handleCategory}
          key={index}
        >
          <p style={{fontFamily:"cursive", fontSize:"20px",fontStyle:"oblique"}}>{data}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterCategories;
