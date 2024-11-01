import estilos from './Topo.module.css'; // estilos
import Link from 'next/link'; // link
// icones
import { FaGithub } from "react-icons/fa"; // github
import { FaLinkedin } from "react-icons/fa"; // linkedin
import { MdEmail } from "react-icons/md";; // email

export default function Topo() {
    return (
        <header className={estilos.topo}>
            <div className={estilos.container}> 
                {/* Foto de perfil */}
                <div className={estilos.foto_perfil}>
                    <p></p>
                </div>
                {/* texto */}
                <div className={estilos.texto}>
                    <h1>Lucas Teixeira Santos</h1>
                    <h2>Desenvolvedor Full-Stack</h2>
                </div>
            </div>
            {/* links */}
            <nav className={estilos.links_container}>
                <div className={estilos.box_link}>
                    <Link  href="https://www.linkedin.com/in/lucas-teixeira-santos-br/" target='_blank' title='LinkedIn'><FaLinkedin /></Link>
                    <Link  href="https://github.com/lucas-devworks" target='_blank' title='GitHub'><FaGithub /></Link>
                    <Link  href="mailto:lucasteixeirasantos74@gmail.com" target='_blank' title='E-mail'><MdEmail /></Link>
                </div>
                <div className={estilos.botao}>
                    <Link href='#projetos'>Projetos</Link>
                    <Link href='#sobre_mim'>Sobre mim</Link>
                    <Link href='#habilidades'>Tecnologias</Link>    
                
                </div>
            </nav>
        </header>
    );
}