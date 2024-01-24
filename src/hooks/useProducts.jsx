
import ProductApi from '../services/fakeStore.api'

import {useLoading} from './useLoading'

import { useEffect, useState } from 'react';

export  const UseProducts = () => {
  let [data, setData] = useState([{}]);
  let {loading,setLoading}=useLoading();
   useEffect(() => {
    
    const fecthData=async()=>{
      try{
        setLoading(true)
        const result= await ProductApi();
        setData(result!= undefined ? result : [{ status: '404', message: 'Data not found' }]);
        setLoading(false)
      }catch(error){
        console.error(`Error: ${error.message}`)
        setLoading(true)
      }
    }
      fecthData()
  }, [setData,setLoading])

  return {data,loading};
}
