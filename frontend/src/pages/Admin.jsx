import { useState } from "react";
import Header from "../components/Header";
import { useProductos } from "../context/ProductoContext";
import { Formulario } from "../components/Formulario";
import { useUsuarios } from "../context/UsuarioContext";
import { FormularioUsuario } from "../components/FormularioUsuario";
import "../components/Formulario.css";
import "./Admin.css";

export default function Admin() { 
  const { productos, borrar, setProductoEditando } = useProductos();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const { usuarios, borrarUsuario, setUsuarioEditando } = useUsuarios();
  const [mostrarFormUsuarios, setMostrarFormUsuarios] = useState(false);
  
  const [pestaniaActiva, setPestaniaActiva] = useState("productos");
const cambiarPestania = (NuevaPestania) => {
      setPestaniaActiva(NuevaPestania);
      setMostrarFormulario(false); 
      setMostrarFormUsuarios(false);
      setProductoEditando(null); 
      setUsuarioEditando(null);    
  };

  return (
    <div className="contenedor-pagina">
      <Header titulo="Panel de administración" />
    
      <nav className="admin-subnav">
        <ul>
          <li 
            className={pestaniaActiva === "productos" ? "activo" : ""} 
            onClick={() => cambiarPestania("productos")}
          >
            Productos
          </li>
          <li 
            className={pestaniaActiva === "usuarios" ? "activo" : ""} 
            onClick={() => cambiarPestania("usuarios")}
          >
            Usuarios
          </li>
          <li 
            className={pestaniaActiva === "stock" ? "activo" : ""} 
            onClick={() => cambiarPestania("stock")}
          >
            Stock Crítico
          </li>
        </ul>
      </nav>

      <main>
        {pestaniaActiva === "productos" && (
          <>
            <div className="admin-acciones">
              <p>{productos.length} productos</p>
              <button onClick={() => {
                setProductoEditando(null);
                setMostrarFormulario(true);
              }}>
                Nuevo Producto
              </button>
            </div>

            {mostrarFormulario && <Formulario onClose={() => setMostrarFormulario(false)} />}

            <table className="tabla-admin">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.nombre}</td>
                    <td>{producto.categoria}</td>
                    <td>$ {Number(producto.precio || 0).toLocaleString("es-AR")}</td>
                    <td>
                      {producto.stock} 
                      {producto.stock < 5 && <span className="stock-critico">bajo</span>}
                    </td>
                    <td className="acciones-celda">
                      <button className="btn-icono" onClick={() => {
                        setProductoEditando(producto);
                        setMostrarFormulario(true);
                      }}>✏️</button>
                      <button className="btn-icono" onClick={() => borrar(producto.id)}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {pestaniaActiva === "usuarios" && (
          <>
            <div className="admin-acciones">
              <p>{usuarios?.length || 0} usuarios</p>
              <button onClick={() => {
                setUsuarioEditando(null);
                setMostrarFormUsuarios(true);
              }}>
                Nuevo Usuario
              </button>
            </div>

            {mostrarFormUsuarios && <FormularioUsuario onClose={() => setMostrarFormUsuarios(false)} />}

            <table className="tabla-admin">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios?.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.rol}</td>
                    <td className="acciones-celda">
                      <button className="btn-icono" onClick={() => {
                        setUsuarioEditando(usuario);
                        setMostrarFormUsuarios(true);
                      }}>✏️</button>
                      <button className="btn-icono" onClick={() => borrarUsuario(usuario.id)}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {pestaniaActiva === "stock" && (
          <>
            <div className="admin-acciones">
              <p>{productos.filter(p => p.stock < 5).length} productos con stock crítico</p>
            </div>
            <table className="tabla-admin">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                {productos.filter(p => p.stock < 5).map(producto => (
                  <tr key={producto.id}>
                    <td>{producto.nombre}</td>
                    <td>{producto.categoria}</td>
                    <td>$ {Number(producto.precio || 0).toLocaleString("es-AR")}</td>
                    <td>
                      {producto.stock} <span className="stock-critico">bajo</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </main>
    </div>
  );
}