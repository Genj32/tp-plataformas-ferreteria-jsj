import React from "react";

export default function Titulo({ texto, children, color, ...res }) {
  // console.log(children)
  return <h1 {...res} className={color} >{texto}</h1>;
}
