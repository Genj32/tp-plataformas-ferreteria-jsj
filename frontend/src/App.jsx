import { useState } from "react";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import Table from "./components/Table";

const init = [
  {
    id: 1,
    nombre: "Homero",
    estado: false,
  },
  {
    id: 2,
    nombre: "Marge",
    estado: true,
  },
  {
    id: 3,
    nombre: "Bart",
    estado: true,
  },
  {
    id: 4,
    nombre: "Lisa",
    estado: false,
  },
  {
    id: 5,
    nombre: "Maggie",
    estado: false,
  },
];

export default function App() {
  const [nombre, setNombre] = useState("");
  const [personajes, setPersonajes] = useState(init);

  const handleChange = (event) => setNombre(event.target.value);
  const handleAgregar = () => {
    const aux = [...personajes];
    aux.push({
      id: aux.length + 1,
      nombre: nombre,
      estado: false,
    });
    setPersonajes(aux);
  };

  const handleCompletado = (id) => {
    const personajesActualizado = personajes.map((personaje) => {
      if (personaje.id == id) {
        personaje.estado = !personaje.estado;
      }
      return personaje;
    });
    setPersonajes(personajesActualizado);
  };

  return (
    <>
      <Titulo texto="Hola" color="text-red-600" onClick={ () => console.log("Hola!") }/>
      <Formulario handleAgregar={handleAgregar} handleChange={handleChange} />
      <Table handleCompletado={handleCompletado} personajes={personajes} />
    </>
  );
}
