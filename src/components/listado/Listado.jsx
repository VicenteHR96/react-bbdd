import { Table } from "react-bootstrap";

export const Listado = ({ colaboradores }) => {
  //   console.table(colaboradores);

  const renderTablaColaboradores = () => {
    return colaboradores.map((colaborador) => (
      <tr key={colaborador.id}>
        <td>{colaborador.nombre}</td>
        <td>{colaborador.correo}</td>
        <td>{colaborador.edad}</td>
        <td>{colaborador.cargo}</td>
        <td>{colaborador.telefono}</td>
      </tr>
    ));
  };

  return (
    <>
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>{renderTablaColaboradores()}</tbody>
      </Table>
    </>
  );
};

export default Listado;
