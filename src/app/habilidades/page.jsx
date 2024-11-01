import estilos from './Habilidades.module.css';
import { CardHabilidades } from '@/componentes/CardHabilidades';
//icones
import { FaHtml5 } from "react-icons/fa"; // html
import { IoLogoCss3 } from "react-icons/io5"; // css
import { RiJavascriptFill } from "react-icons/ri"; // javascript
import { FaReact } from "react-icons/fa"; // react
import { TbApi } from "react-icons/tb"; // api rest
import { PiFileSql } from "react-icons/pi"; // sql
import { GrMysql } from "react-icons/gr"; // mysql
import { FaNodeJs } from "react-icons/fa"; // node.js


export default function Habilidades() {
    return (
    
    <section className={estilos.container_habilidades}>
        <div className={estilos.titulo}>
                <h2>Tecnologias</h2>
                <small>Habilidades</small>
        </div>

        <div className={estilos.cards}>
            <CardHabilidades nome={'HTML 5'} icone={<FaHtml5 />}/>
            <CardHabilidades nome={'CSS 3'} icone={<IoLogoCss3 />}/>
            <CardHabilidades nome={'JavaScript'} icone={<RiJavascriptFill />}/>
            <CardHabilidades nome={'React.js'} icone={<FaReact />}/>
            <CardHabilidades nome={'API REST'} icone={<TbApi />}/>
            <CardHabilidades nome={'SQL'} icone={<PiFileSql />}/>
            <CardHabilidades nome={'MySQL'} icone={<GrMysql />}/>
            <CardHabilidades nome={'Node.js'} icone={<FaNodeJs />}/>
        </div>
    </section>

    )
}