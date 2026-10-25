import { useState } from "react"

export default function App() {
  const [nombre, setNombre] = useState("")
  const [personajes, setPersonajes] =useState([])

  const handleChange = (event) => setNombre(event.target.value)
  const handleAgregar = () => {
    const aux = [...personajes]
    aux.push(nombre)
    setPersonajes(aux)
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAgregar} >+</button>
      <ul>
        {personajes.map( (personaje, indice) => <li key={indice} >{personaje}</li> ) }
      </ul>
    </>
  )
}