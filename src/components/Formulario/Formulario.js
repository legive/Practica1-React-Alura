import { useState } from "react";
import "./Formulario.css";
import ListaOpciones from "../ListaOpciones";
import CampoTexto from "../CampoTexto/index";
import Boton from "../Boton/index";
import { v4 as uuid } from 'uuid';
import hexToRgba from 'hex-to-rgba';


const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");
  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

const {registrarColaborador, registrarEquipo}=props
  const manejarEnvio = (e) => {
    e.preventDefault();
    let colaborador = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(colaborador)
  };

  const manejarEnvioEquipo = (e) => {
    e.preventDefault();
    let equipo = {
      id:uuid(),
      titulo:titulo,
      colorPrimario: hexToRgba(color, '0.2'),
      colorSegundario: color
    };
    registrarEquipo(equipo)
    console.log(equipo);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>

        <CampoTexto
          tipo="text"
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <CampoTexto
          tipo="text"
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <CampoTexto
          tipo="text"
          titulo="Foto"
          placeholder="Ingresa enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos} />
        <Boton>Crear</Boton>
      </form>

      <form onSubmit={manejarEnvioEquipo}>
        <h2>Rellena el formulario para crear un equipo</h2>
        <CampoTexto
          tipo="text"
          titulo="Titulo"
          placeholder="Ingresar Titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <CampoTexto
          tipo="color"
          titulo="Color"
          placeholder="Ingresar el color en Hex"
          required
          valor={color}
          actualizarValor={actualizarColor}
        />
        <button className="boton">Registrar Equipo</button>
        </form>
    </section>
  );
};
export default Formulario;
