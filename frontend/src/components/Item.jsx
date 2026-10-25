import React from "react";

export default function Item({personaje, handleCompletado}) {
  return (
    <tr
      className={`${
        personaje.estado ? "line-through" : ""
      } bg-gray-100 border-b border-gray-100 hover:bg-gray-50 `}
    >
      <td className="p-3 text-gray-600 text-sm">{personaje.id}</td>
      <td className="p-3 text-gray-600 text-sm">{personaje.nombre}</td>
      <td className="p-3 text-center">
        <button
          className="p-2 rounded text-green-600 hover:text-green-700 text-xs"
          onClick={() => handleCompletado(personaje.id)}
        >
          Completado
        </button>
      </td>
    </tr>
  );
}
