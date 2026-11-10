import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'
// 1. Importás el nuevo contexto de usuarios:
import { UsuarioProvider } from './context/UsuarioContext' 
import { CarritoProvider } from './context/CarritoContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UsuarioProvider>
          <CarritoProvider>
          <App />
          </CarritoProvider>
        </UsuarioProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)