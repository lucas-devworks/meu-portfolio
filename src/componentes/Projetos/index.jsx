import estilos from './Projetos.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Projetos (props) {
    return (

           <div className={estilos.cards}>
                <figure>
                    <figcaption>{props.nome}</figcaption>
                        <Link target='_blank' href={props.link_projeto}>
                            <img src={props.imagem} alt='projeto'/>
                        </Link>
                </figure>

                <div className={estilos.visualizador}>
                    <Link className={estilos.olho} target='_blank' href={props.link_projeto}>
                             <div>        
                                Visualizar<FaEye />
                            </div>
                    </Link>  

                    <Link className={estilos.git} target='_blank' href={props.github}>                        
                        <div>
                        Código<FaGithub />
                        </div>
                    </Link>
                </div>
            </div>
    );

}