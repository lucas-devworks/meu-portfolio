import estilos from './CardHabilidades.module.css';
import Image from 'next/image';


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