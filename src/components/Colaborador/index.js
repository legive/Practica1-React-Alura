import "./Colaborador.css"
import { TiDelete } from "react-icons/ti";
const Colaborador = (props) => {
    const {nombre, puesto, foto } = props.colaborador
    const {eliminarColaborador}=props
    return <div className="colaborador">
        <spam onClick={eliminarColaborador}><TiDelete  /></spam>
        <div className="encabezado" style={{backgroundColor:props.color}}>
            <img src={foto} alt=""></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>

    </div>
}
export default Colaborador