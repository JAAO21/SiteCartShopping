

import { useState } from 'react';

import { UseProducts } from './hooks/useProducts'

import Loading from './components/Loading/index.jsx'
import FilterCategories from './components/FilterCategories/index.jsx'
import FilterPrices from './components/FilterPrices/index.jsx';

import './App.css'

function App() {
  const { data, loading, setData } = UseProducts();
  const [dataInput, setDataInput] = useState('')
  if (loading) return <Loading />

  const handleClick = (e) => {
    e.preventDefault();
    /*  const response= fetch('https://fakestoreapi.com/products/categories')
              .then(res=>res.json())
              console.log(response) */
    console.log(dataInput)
  }

  const handleChangeInput = (e) => {
    setDataInput(e.target.value)
  }


  return (
    <div>

      <div>
        <label>Buscar</label>
        <form action="" onSubmit={handleClick}>
          <input type="text" name='search' onChange={handleChangeInput} />
          <input type='button' />
        </form>
      </div>
      <h1> Filtro de categorias </h1>
      <FilterCategories setData={setData} />
      <h1>Filtro de precios</h1>
      <FilterPrices setData={setData} />
      {
        data.map((d, index) => (
          <div key={index} style={{ display: 'flex', border: '1px solid black', flexDirection: 'column' }}>
            <h1>{d.title}</h1>
            <p>{d.description}</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={d.image} alt={d.id} style={{ height: '80px', width: '80px' }} />
            </div>
            <p>{d.price}</p>

          </div>
        ))
      }
    </div>




  )
}

export default App
