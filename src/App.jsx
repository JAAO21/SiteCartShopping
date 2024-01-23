
import './App.css'

import { UseProducts } from './hooks/useProducts'
function App() {
  const { data, loading } = UseProducts();
  if (loading) return <p>Loading ...</p>

  return (
    <>
      <div>
        {
          data.map((d,index) => (
            <div key={index}> 
              <h1>{d.id}</h1>
              <p>{d.price}</p>
              <h1>{d.price}</h1>
              <p>{d.image}</p>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default App
