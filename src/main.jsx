import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import LoginPage from  './pages/login'
import RegisterPage from './pages/register'
import ProductPage from './pages/product'
import DetailProduct from './pages/detail'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/product',
    element: <ProductPage />
  },
  {
    path: '/detail',
    element: <DetailProduct />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
