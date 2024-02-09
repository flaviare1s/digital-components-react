import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Product } from './pages/Product.jsx';
import { ProductsContext } from './pages/providers/products.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <div><App/></div>,
  },
  {
    path: "/product/:id",
    element: <div><Product/></div>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsContext.Provider>
      <RouterProvider router={router} />
    </ProductsContext.Provider>
  </React.StrictMode>,
)
