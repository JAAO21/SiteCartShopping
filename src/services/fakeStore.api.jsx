const url = "https://fakestoreapi.com/products";

export default async function Api(params) {
  try {
    let response;
    if (params != undefined) {
      response = await fetch(`${url}/${params}`);
    } else {
      response = await fetch(url);
    }

    if (!response.ok) throw new Error(`Error :${response.status}`);
    const json = await response.json();

    return json;
  } catch (error) {
    console.log(`Data error: ${error.message}`);
    throw error;
  }
}
