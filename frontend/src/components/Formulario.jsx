import { useState, useEffect } from "react";
import { useProductos } from "../context/ProductoContext";
import "./Formulario.css";
export function Formulario() {
    const { crear, editar, productoEditando, setProductoEditando } = useProductos();

    const [producto, setProducto] = useState({
        nombre: "",
        categoria: "",
        precio: "",
        stock: "",
        imagen: ""
    });

    // Cada vez que productoEditando cambie, rellenamos el formulario (o lo limpiamos)
    useEffect(() => {
        if (productoEditando) {
            setProducto(productoEditando);
        } else {
            setProducto({
                nombre: "",
                categoria: "",
                precio: "",
                stock: "",
                imagen: ""
            });
        }
    }, [productoEditando]);

    const handlerChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    };

    const handlerSubmit = (e) => {
        e.preventDefault();

        const productoAEnviar = {
            ...producto,
            precio: Number(producto.precio),
            stock: Number(producto.stock)
        };

        if (productoEditando) {
            // Si estamos editando, llamamos a la función editar pasándole el ID
            editar(productoEditando.id, productoAEnviar);
        } else {
            // Si no, creamos uno nuevo
            crear(productoAEnviar);
        }

        // Limpiamos el formulario
        setProducto({
            nombre: "",
            categoria: "",
            precio: "",
            stock: "",
            imagen: ""
        });
    };

    return (
        <form onSubmit={handlerSubmit} className="admin-form">
            <h2>{productoEditando ? "Editar Producto" : "Cargar Nuevo Producto"}</h2>
            
            <div>
                <label>Nombre:</label>
                <input 
                    type="text" 
                    name="nombre" 
                    value={producto.nombre} 
                    onChange={handlerChange} 
                    required
                />
            </div>

            <div>
                <label>Categoría:</label>
                <input 
                    type="text" 
                    name="categoria" 
                    value={producto.categoria} 
                    onChange={handlerChange} 
                    required
                />
            </div>

            <div>
                <label>Precio:</label>
                <input 
                    type="number" 
                    name="precio" 
                    value={producto.precio} 
                    onChange={handlerChange} 
                    required
                />
            </div>

            <div>
                <label>Stock:</label>
                <input 
                    type="number" 
                    name="stock" 
                    value={producto.stock} 
                    onChange={handlerChange} 
                    required
                />
            </div>

            <div>
                <label>URL de Imagen:</label>
                <input 
                    type="text" 
                    name="imagen" 
                    value={producto.imagen} 
                    onChange={handlerChange} 
                />
            </div>
            
            <button type="submit">
                {productoEditando ? "Actualizar Producto" : "Guardar Producto"}
            </button>
        </form>
    );
}