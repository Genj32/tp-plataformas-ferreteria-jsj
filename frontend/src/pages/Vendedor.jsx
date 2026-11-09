import Header from "../components/Header";
import { useProductos } from "../context/ProductoContext"
import "./Admin.css"
import { useState } from "react";


export default function Vendedor() {
  const { productos, vender } = useProductos();
  const [cantidad, setCantidad] = useState(1);
  const [productoId, setProductoId] = useState("");
  const [mensaje, setMensaje] = useState("");
  const stockCritico = productos.filter((producto) => producto.stock < 5);

  function manejarVenta(e) {
    e.preventDefault();
    const ok = vender(parseInt(productoId, 10), parseInt(cantidad, 10));

if (ok) {
  setMensaje("Venta realizada con éxito");
    } else {
  setMensaje("Error: cantidad inválida o stock insuficiente");  
    }   
}

   return (
    <div className="contenedor-pagina">
      <Header titulo="Panel de Vendedor" />

      <main>
        <h3>Registrar venta</h3>
        <form onSubmit={manejarVenta} className="admin-form">
          <label htmlFor="producto">Producto</label>
          <select
            id="producto"
            value={productoId}
            onChange={(e) => setProductoId(e.target.value)}
          >
            <option value="">Elegí un producto</option>
            {productos.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombre} (stock: {p.stock})
              </option>
            ))}
          </select>

          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />

          <button type="submit">Vender</button>
          {mensaje && <p>{mensaje}</p>}
        </form>

        <h3>Stock crítico</h3>
        <p>{stockCritico.length} productos con stock bajo</p>

        <table className="tabla-admin">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {stockCritico.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.categoria}</td>
                <td>{producto.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
