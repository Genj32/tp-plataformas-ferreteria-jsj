import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import Layout from './components/Layout.jsx'
import userRoutes from './routes/UserRoutes.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: userRoutes
  },
  {
    path: "*",
    element: <div>404</div>
  },
  {
    path: "/admin",
    element: <div>Layout</div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
