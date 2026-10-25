import React from "react";

export default function Formulario({handleAgregar, handleChange}) {
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAgregar}>+</button>
    </>
  );
}
