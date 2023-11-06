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
  const [colaboradoresOriginal, setColaboradoresOriginal] =
    useState(baseColaboradores);

  const [alert, setAlert] = useState({ color: "", mensaje: "" });

  return (
    <div className="container">
      <div className="mx-4">
        <Row>
          <Col sm={12} md={9}>
            <Card>
              <h1 className="text-start">Lista de colaboradores</h1>

              {/* Crear componente Buscador */}
              <Buscador
                setColaboradores={setColaboradores}
                colaboradores={colaboradores}
                colaboradoresOriginal={colaboradoresOriginal}
              ></Buscador>

              {/* Crear componente Listado */}

              <Listado colaboradores={colaboradores}></Listado>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <h2>Agregar colaborador</h2>
              {/* Crear componente Formulario */}
              <Formulario
                setAlert={setAlert}
                setColaboradores={setColaboradores}
                setColaboradoresOriginal={setColaboradoresOriginal}
                colaboradores={colaboradores}
              ></Formulario>
              {/* Crear componente Alerta */}
              {alert.mensaje !== "" && <Alert mensaje={alert}></Alert>}
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
