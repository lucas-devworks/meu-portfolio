import estilos from './Arrow.module.css';
import Link from 'next/link';
import { FaArrowAltCircleUp } from "react-icons/fa"; // flecha


export default function Arrow () {
    return (
        <div className={estilos.back}>
            <Link href="#topo"><FaArrowAltCircleUp/></Link>
        </div>

    )
}
