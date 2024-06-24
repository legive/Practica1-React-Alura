import { useState } from "react";
import "./Formulario.css";
import ListaOpciones from "../ListaOpciones";
import CampoTexto from "../CampoTexto/index";
import Boton from "../Boton/index";
const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");
const {registrarColaborador}=props
  const manejarEnvio = (e) => {
    e.preventDefault();
    let colaborador = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(colaborador)
   
      
    console.log(colaborador);
  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>

        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresa enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos} />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};
export default Formulario;
