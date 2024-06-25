import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {
  //Destructuracion
  const { titulo, colorPrimario } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor } = props;

  const obj = {
      backgroundColor: hexToRgba(colorPrimario, '0.2'),
  };

  const estiloTitulo = { borderColor: colorPrimario };
  

  return colaboradores.length > 0 ? (
      <section className="equipo" style={obj }>
      <input
        type="color"
        value={colorPrimario}
        className="input-color"
        onChange={(evento) => actualizarColor(evento.target.value, titulo)}
      ></input>
      <h3 style={estiloTitulo}>{titulo}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador, index) => (
          <Colaborador
            eliminarColaborador={eliminarColaborador}
            key={index}
            colaborador={colaborador}
            color={colorPrimario}
          />
        ))}
      </div>
    </section>
  ) : (
    <div></div>
  );
};

export default Equipo;
