import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Scan from "./components/Scan"
import PayTo from "./components/PayTo"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.module.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/scan",
    element: <Scan />,
  },
  {
    path: "/payto",
    element: <PayTo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
