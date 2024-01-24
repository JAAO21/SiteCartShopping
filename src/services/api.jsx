

const url = 'https://fakestoreapi.com/products'

export default async function Api() {
 return await fetch(url)
 .then(response => response.json())

}