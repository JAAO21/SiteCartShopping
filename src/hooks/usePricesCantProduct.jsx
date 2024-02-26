import { useState } from "react";

export const usePricesCantProduct = () => {
  const [count, setCount] = useState({ countCode:0,amount:0 }); //estado para manejar los precios y total de las cuentas
  return { count, setCount };
};
