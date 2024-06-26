import "./CampoTexto.css";

const CampoTexto = (props) => {


  const placeholdernuevo = props.placeholder + "...";
  const{tipo}=props
    const manejarCambio = (e) => {
        console.log(e.target.value)
      
      props.actualizarValor(e.target.value)
    }
  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input
        type={tipo}
        placeholder={placeholdernuevo}
        required={props.required}
              value={props.valor}
              onChange={manejarCambio}
      />
    </div>
  );
};

export default CampoTexto;
