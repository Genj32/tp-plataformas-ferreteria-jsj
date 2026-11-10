import { Link } from "react-router-dom"
import { useAuth } from '../context/AuthContext';
import { useCarrito } from '../context/CarritoContext';
import "./Header.css";

export default function Header({ titulo }) {
    const { usuario, logout } = useAuth();
    const { totalItems } = useCarrito();

    return (
        <header className="header-main">
            <div className="header-izq">
                <div className="logo-jsj">JSJ</div>
                <h2 className="header-titulo">{titulo}</h2>
            </div>
            <div className="header-der">
                {usuario?.rol !== "administrador" && (
                    <Link to="/carrito" className="header-item" style={{ textDecoration: 'none' }}>
                        🛒 Carrito ({totalItems})
                    </Link>
                )}
                <span className="header-item">{usuario?.nombre}</span>
                <button className="btn-logout" onClick={logout}>Salir</button>
            </div>
        </header>
    );
}                                 