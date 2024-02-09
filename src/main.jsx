import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/App.jsx'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Product } from './pages/Product.jsx';
import { ProductsProvider } from "./providers/products";

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
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </React.StrictMode>
)
