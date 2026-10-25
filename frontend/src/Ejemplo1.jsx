import { useState } from "react"

export default function App() {
  const [ contador, setContador ] = useState(0)
  const [ mensaje, setMensaje ] = useState(0)
  // const contador = state[0]
  // const setContador = state[1]
  // Logica
  // const mensaje = "Hola!"
  const personajes = [
    "Homero",
    "Marge",
    "bart",
    "Lisa",
    "Maggie"
  ]
  // let contador = 0

  const handleClick = () => {
    // contador++
    setContador( contador + 1 )
  }
  const handleMensaje = (event) => {
    console.log(event.target.value)
  }
  console.log(contador)
  // UI
  return (
    <div className="text-red-600" >
      {mensaje}
      <span>Contador: {contador}</span>
      <input type="text" onChange={handleMensaje}/>
      <ul>
        { personajes.map((personaje) => <li>{personaje}</li>) }
      </ul>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

// const App = () => {
//   return ()
// }
// class App extends React.Component{
//   render(){
//     return ()
//   }
// }