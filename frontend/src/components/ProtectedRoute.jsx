import { Navigate } from "react-router"

export default function ProtectedRoute({element, rol}) {
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    if( usuario && usuario.rol >= rol ) return element
    if( usuario && usuario.rol < rol ) return <Navigate to="/personajes" /> 
    return <Navigate to="/login" />
}