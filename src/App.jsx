import { Row, Col, Card } from "react-bootstrap";
import Listado from "./components/listado/Listado";
// obtener data de archivo baseColaboradores
// almacenar data
import { baseColaboradores } from "./db/baseColaboradores";
import { useState } from "react";
import { Formulario } from "./components/Formulario/Formulario";
import { Alert } from "./components/alert/Alert.jsx";
import Buscador from "./components/buscador/Buscador";
// pasarla a componente Listado y renderizar

const App = () => {
  const [colaboradores, setColaboradores] = useState(baseColaboradores);

  const [alert, setAlert] = useState({ color: "", mensaje: "" });

  return (
    <>
      <div className="mx-4">
        <h1 className="text-start">Lista de colaboradores</h1>
        <Row>
          <Col sm={4}>
            {/* Crear componente Buscador */}
            <Buscador></Buscador>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={9}>
            {/* Crear componente Listado */}
            <h2>Buscador</h2>
            <Listado colaboradores={colaboradores}></Listado>
          </Col>
          <Col md={3} className="">
            <Card>
              <h2>Agregar colaborador</h2>
              {/* Crear componente Formulario */}
              <Formulario
                setAlert={setAlert}
                setColaboradores={setColaboradores}
                colaboradores={colaboradores}
              ></Formulario>
              {/* Crear componente Alerta */}
              {alert.mensaje !== "" && (
                <Alert variant={alert.color}>{alert.mensaje}</Alert>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;
