

import './App.css'
import Loading from './components/Loading/index.jsx'
import { UseProducts } from './hooks/useProducts'

function App() {
  const { data, loading } = UseProducts();

  if (loading) return <Loading />


  return (
    data.map((d, index) => (
      <div key={index}>

        <p>{d.price}</p>
        <h1>{d.price}</h1>
        <p>{d.image}</p>
      </div>
    ))




  )
}

export default App
