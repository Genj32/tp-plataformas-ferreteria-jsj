import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useCarrito } from "../context/CarritoContext";
import "./Carrito.css";

export default function Carrito() {
    const { carrito, agregarAlCarrito, restarDelCarrito, eliminarDelCarrito, limpiarCarrito, totalPrecio } = useCarrito();

  return (
    <div className="contenedor-pagina">
      <Header titulo="Mi Carrito" />

      <main>
        {carrito.length === 0 ? (
          <div className="mensaje-vacio">
            <p>Tu carrito está vacío.</p>
            <Link to="/catalogo">
              <button className="btn-volver">Volver al catálogo</button>
            </Link>
          </div>
        ) : (
          <div className="carrito-contenido">
            <div className="carrito-lista">
              {carrito.map((item) => (
                <div key={item.id} className="carrito-item">
                  <div className="item-info">
                    <h3>{item.nombre}</h3>
                    <p className="item-categoria">{item.categoria}</p>
                    <p>Precio unitario: $ {item.precio.toLocaleString("es-AR")}</p>
                  </div>
                  
                  <div className="item-acciones">
                    <div className="control-cantidad">
                      <button className="btn-cant" onClick={() => restarDelCarrito(item.id)}>-</button>
                      <span className="item-cantidad-num">{item.cantidad}</span>
                      <button className="btn-cant" onClick={() => agregarAlCarrito(item)}>+</button>
                    </div>

                    <span className="item-subtotal">
                      $ {(item.precio * item.cantidad).toLocaleString("es-AR")}
                    </span>
                    <button 
                      className="btn-icono-borrar" 
                      onClick={() => eliminarDelCarrito(item.id)}
                      title="Eliminar producto"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="carrito-resumen">
              <h2>Total: $ {totalPrecio.toLocaleString("es-AR")}</h2>
              <div className="resumen-botones">
                <Link to="/catalogo">
                   <button className="btn-volver-outline">Seguir comprando</button>
                </Link>
                <button className="btn-vaciar" onClick={limpiarCarrito}>Vaciar carrito</button>
                <button className="btn-comprar" onClick={() => alert("¡Compra finalizada con éxito!")}>
                  Finalizar compra
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}