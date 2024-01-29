import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import Routes from './routes/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={Routes} />
 ,
)
