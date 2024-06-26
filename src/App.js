import { useState } from "react";
//Para crear un identificador unico
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MIOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://www.shutterstock.com/image-photo/profile-face-young-woman-isolated-260nw-1489575752.jpg",
      nombre: "Leyla Vasquez",
      puesto: "Instructora de React",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2023/01/20/keyla-soltera-de-la-isla-de-las-tentaciones-6.jpeg",
      nombre: "Keyla Vasquez",
      puesto: "Instructora de React",
      fav: false
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "##FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  //Ternario-->condicion?seMuestra:noseMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);
  };
  //Registrar Equipo
  const registrarEquipo = (equipo) => {
    actualizarEquipos([...equipos, equipo]);
  };

  //Actualizar color de equipo
  const actualizarColor = (color, titulo) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.titulo === titulo) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  };
  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar ", id);
    const nuevoColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    // console.log(nuevoColaboradores)
    actualizarColaboradores(nuevoColaboradores);
  };

  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }
  return (
    <div>
      <Header />
      {mostrarFormulario === true ? (
        <Formulario
          registrarColaborador={registrarColaborador}
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarEquipo={registrarEquipo}
        />
      ) : (
        <div></div>
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo, index) => (
        <Equipo
          actualizarColor={actualizarColor}
          like={like}
          eliminarColaborador={eliminarColaborador}
          key={equipo.titulo}
          datos={equipo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
