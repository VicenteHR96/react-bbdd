import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Formulario = ({
  setAlert,
  setColaboradores,
  setColaboradoresOriginal,
  colaboradores,
}) => {
  let myuuid = uuidv4();
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
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

    setAlert({
      color: "success",
      mensaje: "Has agregado a un colaborador.",
    });

    if (
      formulario.nombre == "" ||
      formulario.correo == "" ||
      formulario.edad == "" ||
      formulario.cargo == "" ||
      formulario.telefono == ""
    ) {
      setAlert({
        color: "danger",
        mensaje: "Debes completar todos los campos.",
      });
      return;
    }

    if (!validEmail.test(formulario.correo)) {
      setAlert({ mensaje: "Correo electrónico inválido.", color: "danger" });
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
    setColaboradoresOriginal([...colaboradores, nuevoColaborador]);
    console.log(nuevoColaborador);

    setFormulario({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  return (
    <Form onSubmit={onsubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          name="nombre"
          type="text"
          placeholder="Nombre"
          onChange={onchange}
          className="form-registro"
        ></Form.Control>
        <Form.Control
          name="correo"
          type="email"
          placeholder="Correo Electrónico"
          onChange={onchange}
          className="form-registro"
        ></Form.Control>
        <Form.Control
          name="edad"
          type="number"
          placeholder="Edad"
          onChange={onchange}
          className="form-registro"
        ></Form.Control>
        <Form.Control
          name="cargo"
          type="text"
          placeholder="Cargo"
          onChange={onchange}
          className="form-registro"
        ></Form.Control>
        <Form.Control
          name="telefono"
          type="number"
          placeholder="Número Telefónico"
          onChange={onchange}
          className="form-registro"
        ></Form.Control>
        <Button variant="warning" type="submit" className="w-100">
          Agregar Colaborador
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
