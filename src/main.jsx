import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './routes/Login.jsx'
import Cadastro from './routes/Cadastro.jsx'
import Artigo from './routes/Artigo.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'logout',
    element: <Cadastro/>
  },
  {
    path:'article',
    element: <Artigo/>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
