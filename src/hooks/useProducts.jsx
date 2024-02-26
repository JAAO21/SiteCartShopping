import { useEffect, useState } from "react";

import { useLoading } from "./useLoading";

import ProductApi from "../services/fakeStore.api";

export const useProducts = (params) => {
  const [products, setProducts] = useState([]);
  const { loading, setLoading } = useLoading();
  const [copyData, setCopyData] = useState([]);
  //manejar estado de errores
  useEffect(() => {
    const fecthData = async () => {
      try {
        setLoading(true);
        const result =
          params != "undefined" ? await ProductApi(params) : await ProductApi();
        setProducts(result != undefined ? result : []);
        setCopyData(result !== undefined ? [...result] : []);
        setLoading(false);
      } catch (error) {
        console.error(`Error: ${error.message}`);
        setLoading(true);
      }
    };
    fecthData();
  }, [setProducts, setLoading]);

  return { products, loading, setProducts,copyData,setCopyData };
};
