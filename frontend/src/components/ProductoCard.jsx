import "./ProductoCard.css";

export default function ProductoCard({ producto }) {
  return (
    <div className="producto-card">
        <div className="imagen-placeholder">🤖</div>

        <h3 className="producto-nombre">{producto.nombre}</h3>
        <p className="producto-categoria">{producto.categoria}</p>

        <p className="producto-precio">$ {producto.precio.toLocaleString("es-AR")}</p>

        <button className="btn-agregar">Agregar al carrito</button>
    </div>
  );
}