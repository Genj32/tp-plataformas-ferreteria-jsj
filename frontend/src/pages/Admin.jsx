import Header from "../components/Header";
import { productos } from "../data/productos";

export default function Admin() {
  return (
    <div>
      {/* Pasamos un título diferente */}
      <Header titulo="Panel de administración" />
      
      <main>
        <button>Nuevo producto</button>
        {/*Aca va a ir la tabla de gestion de productos */}
      </main>
    </div>
  );
}