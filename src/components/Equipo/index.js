import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {
    //Destructuracion
    const { titulo, colorPrimario, colorSecundario } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor } = props
    
    
    
    const estiloTitulo = { borderColor: colorPrimario }
    console.log(colaboradores.length)
    
    return colaboradores.length >0?
        < section className="equipo" style={{ backgroundColor: colorSecundario }
        }>
            <input type="color" value={colorSecundario} className="input-color" onChange={(evento)=>actualizarColor(evento.target.value,titulo)}></input>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {colaboradores.map((colaborador, index) => <Colaborador eliminarColaborador={eliminarColaborador} key={index} colaborador={colaborador} color={colorPrimario} />)}
        </div>
    </section >: <div></div>
    
}

export default Equipo