import estilos from './CardHabilidades.module.css';


export function CardHabilidades (props) {
    return (
        <div className={estilos.card}>
            <h4>{props.nome}</h4>
                <span>
                    {props.icone}
                </span>
        </div>
    )
}