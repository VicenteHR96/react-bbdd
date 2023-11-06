import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

let myuuid = uuidv4();

export const Formulario = ({ setAlert, setColaboradores, colaboradores }) => {
  const [formulario, setFormulario] = useState({
    name: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const onchange = (valor) => {
    setFormulario({ ...formulario, [valor.target.name]: valor.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();

    if (
      formulario.nombre == "" ||
      formulario.correo == "" ||
      formulario.edad == "" ||
      formulario.cargo == "" ||
      formulario.telefono == ""
    ) {
      setAlert({
        color: "danger",
        mensaje: "Debe completar todos los campos",
      });
      return;
    }

    setFormulario({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });

    // Agregar registro
    // id único / UUID Librería
    const nuevoColaborador = { ...formulario, id: myuuid };
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  return (
    <Form onSubmit={onsubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          name="nombre"
          type="text"
          placeholder="Enter Name"
          onChange={onchange}
        ></Form.Control>
        <Form.Control
          name="correo"
          type="email"
          placeholder="Enter Email"
          onChange={onchange}
        ></Form.Control>
        <Form.Control
          name="edad"
          type="number"
          placeholder="Enter Age"
          onChange={onchange}
        ></Form.Control>
        <Form.Control
          name="cargo"
          type="text"
          placeholder="Enter Charge"
          onChange={onchange}
        ></Form.Control>
        <Form.Control
          name="telefono"
          type="number"
          placeholder="Enter Mobile Number"
          onChange={onchange}
        ></Form.Control>
        <Button variant="primary" type="submit" className="w-100">
          Agregar Colaborador
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
