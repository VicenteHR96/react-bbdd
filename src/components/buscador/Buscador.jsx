import React, { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";

const Buscador = ({
  setColaboradores,
  colaboradores,
  colaboradoresOriginal,
}) => {
  const onchange = (valor) => {
    if (valor.target.value != "") {
      const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
        if (
          colaborador.nombre
            .toLowerCase()
            .includes(valor.target.value.toLowerCase()) ||
          colaborador.correo
            .toLowerCase()
            .includes(valor.target.value.toLowerCase()) ||
          colaborador.edad.includes(valor.target.value) ||
          colaborador.telefono.includes(valor.target.value) ||
          colaborador.cargo
            .toLowerCase()
            .includes(valor.target.value.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
      setColaboradores(colaboradoresFiltrados);
    } else {
      setColaboradores(colaboradoresOriginal);
    }
  };

  return (
    <div className="cont-buscador">
      <InputGroup>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          type="text"
          placeholder="Buscar colaboradores"
          onChange={onchange}
          className="input-buscar"
          variant="primary"
        />
      </InputGroup>
    </div>
  );
};

export default Buscador;
