import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider as Tisna} from 'react-router-dom'
import "./index.css"
import Dashboard from "./blog/dasboard/Dashboard"
import { Children } from 'react'
import Header from './components/Header/Header.jsx'
import Detail from './blog/Detail/Detail.jsx'
import About from './blog/About/About.jsx'
import Shop from './blog/Shop/Shop.jsx'

const Router = createBrowserRouter([
  {
  element:<App/>,
  children:[
    {
    path:'/awal',
    element:<Dashboard/>
    },
    {
      path:"/detail-product/:id",
      element:<Detail/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/shop',
      element:<Shop/>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tisna router={Router}/>
  </React.StrictMode>,
)
