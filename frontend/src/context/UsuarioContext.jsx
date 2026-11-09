import { createContext, useContext, useState } from "react";
import { usuarios as listaUsuarios } from "../data/usuarios"; 

const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {

  const [usuarios, setUsuarios] = useState(listaUsuarios); 
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  function crearUsuario(nuevoUsuario) {
    setUsuarios([...usuarios, { id: Date.now(), ...nuevoUsuario }]);
  }

  function borrarUsuario(id) {
    setUsuarios(usuarios.filter(u => u.id !== id));
  }

  function editarUsuario(id, usuarioActualizado) {
    setUsuarios(usuarios.map(u => u.id === id ? { ...u, ...usuarioActualizado } : u));
    setUsuarioEditando(null);
  }

  return (
    <UsuarioContext.Provider value={{ usuarios, crearUsuario, borrarUsuario, editarUsuario, usuarioEditando, setUsuarioEditando }}>
      {children}
    </UsuarioContext.Provider>
  );
}

export function useUsuarios() {
  return useContext(UsuarioContext);
}