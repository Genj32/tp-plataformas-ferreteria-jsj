import Item from "./Item";

export default function Table({ personajes, handleCompletado }) {
  return (
    <table className="w-full text-left border-collapse bg-white rounded-lg shadow-sm">
      <thead>
        <tr className="bg-gray-100 border-b border-gray-200">
          <th className="p-3 text-gray-600 text-sm font-semibold">#</th>
          <th className="p-3 text-gray-600 text-sm font-semibold">Nombre</th>
          <th className="p-3 text-gray-600 text-sm font-semibold">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {personajes.map((personaje, indice) => (
          <Item key={indice} handleCompletado={handleCompletado} personaje={personaje} />
        ))}
      </tbody>
    </table>
  );
}
