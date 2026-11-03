import { useAuth } from '../context/AuthContext';
import "./Header.css";

export default function Header({ titulo }) {
    const { usuario, logout } = useAuth();

    return (
        <header className="header-main">
            <div className="header-izq">
                <div className="logo-jsj">JSJ</div>
                <h2 className="header-titulo">{titulo}</h2>
            </div>
            <div className="header-der">
                {usuario.rol !== "admuinistrador" && (
                    <span className="header-item">Carrito (0)</span>
                )}
                <span className="header-item">{usuario.nombre}</span>
                <button className="btn-logout" onClick={logout}>Salir</button>
                </div>
        </header>
    );
}