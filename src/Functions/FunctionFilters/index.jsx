export const functionFilters = (data, keyword, value, dataProduct, checked) => {
  if (keyword === "Prices") {
    //verifica la palabra clave para entrar a la condición
    let dataFilterPrice = [];
    if (checked) {
      dataFilterPrice = data.filter((item) => item.price == value); //filtra la data por el valor del precio
    } else {
      const index = dataFilterPrice.findIndex(
        (item) => item.price === e.target.value
      ); //busca por indice el valor buscado
      if (index !== -1) {
        dataFilterPrice.splice(index, 1); // Si no está marcado, vacía los datos filtrados
      }
    }
    return dataFilterPrice.length > 0 ? dataFilterPrice : dataProduct; //retorna dataFilterPrice siempre y cuando el array tenga informacion
  } else if (keyword === "Categories") {
    const dataFilter = data.filter((item) => item.category === value);
    if (dataFilter.length === 0) {
      return dataProduct.filter((item) => item.category === value); //retorna dataProduct siempre y cuando el array tenga informacion
    }
    return dataFilter;
  }
};

