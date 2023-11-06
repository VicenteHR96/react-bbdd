import React from "react";
import { baseColaboradores } from "../../db/baseColaboradores";

const words = baseColaboradores;

const result = words.filter((word) => word.length > 8);

console.log(result);

const Buscador = () => {
  return <input type="text"></input>;
};

export default Buscador;
