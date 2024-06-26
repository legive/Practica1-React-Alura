import "./Colaborador.css"
import { AiFillCloseCircle } from "react-icons/ai"
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Colaborador = (props) => {
    const { id,nombre, puesto, foto, equipo, fav } = props.colaborador
    const { colorPrimario, eliminarColaborador, like } = props
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={()=>eliminarColaborador(id)} />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <FaHeart color="red" style={{ cursor: "pointer" }} onClick={() => like(id)} /> : <FaRegHeart onClick={() => like(id)} style={{ cursor: "pointer" }} />}
           
            
        </div>
    </div>
}

export default Colaborador