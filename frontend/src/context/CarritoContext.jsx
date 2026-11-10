import { createContext, useContext,useState } from "react";

const CarritoContext = createContext(null);

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(producto) {
        setCarrito((carritoActual) => {
            const productoExistente = carritoActual.find((item) => item.id === producto.id);

            if (productoExistente) {
                return carritoActual.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                return [...carritoActual, { ...producto, cantidad: 1 }];
            }
        });
    }

    function restarDelCarrito(id) {
    setCarrito((carritoActual) => {
      const producto = carritoActual.find((item) => item.id === id);

      if (producto?.cantidad > 1) {
        return carritoActual.map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        );
      } else {
        return carritoActual.filter((item) => item.id !== id);
      }
    });
  }

    function eliminarDelCarrito(id) {
        setCarrito((carritoActual) => carritoActual.filter((item) => item.id !== id));
    }
    function limpiarCarrito() {
        setCarrito([]);
    }

    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    const totalPrecio = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

    return (
        <CarritoContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                restarDelCarrito,
                eliminarDelCarrito,
                limpiarCarrito,
                totalItems,
                totalPrecio,
            }}
        >
            {children}
        </CarritoContext.Provider>
    );
}

export function useCarrito() {
    return useContext(CarritoContext);
}
