 "use client";
// estilos
import Link from 'next/link';
import estilos from './SobreMim.module.css';
import { GiYinYang } from "react-icons/gi"; // yin-yang
import { LiaFileDownloadSolid } from "react-icons/lia"; // CV
import { MdDoneOutline } from "react-icons/md";


export default function SobreMim(props) {

    let botaoClicado = props.clicado;

    function alterarState() {
        props.setClicado(botaoClicado = true)
    }


    return (
        <main className={estilos.main}>
            <div className={estilos.titulo}>
                <h2>Sobre Mim</h2>
                <small>Minha introdução</small>
            </div>
            <section className={estilos.secao_sobreMim}>
                <div className={estilos.yin_yang}>
                <GiYinYang />
                </div>
                <div className={estilos.texto}>
                    <p>
                    Sou desenvolvedor Full Stack em busca de minha oportunidade profissional. Ao longo desses estudos, pude consolidar meus
                    conhecimentos com projetos do curso e trabalhos pessoais. Minha paixão por tecnologia foi um fator determinante que me fez
                    chegar até aqui; a sensação de digitar códigos e gradativamente ver os resultados na tela é algo que me cativa, é difícil
                    encontrar palavras para descrever isso. Tenho o desejo de sair do “simulado” e colocar toda essa energia em um ambiente profissional
                    que me ajude a evoluir como um eterno estudante da tecnologia. Além da tecnologia, sou um amante da cultura japonesa. Creio
                    que haja uma relação indireta com o meu aprendizado de programação, pois, como bem sabemos, o Japão possui muita tecnologia, 
                    e, por ser um estudante, estou a par das novidades que ocorrem por lá. Acho desafiador aprender as estruturas do idioma, assim
                    como na programação; contudo, é um desafio que estou disposto a continuar desbravando!
                    </p>
                    {/* botão para download CV */}
                    <div className={estilos.container_cv}>
                        <a href='/documentos/LUCAS TEIXEIRA SANTOS - CURRÍCULO.pdf' download> {/* donwload do currículo */}
                            <button
                             onClick={alterarState}  /* capturando click */
                             className={botaoClicado ? estilos.botao_verde : undefined} // if ternário  (troca a cor do botão)
                            >
                             Download CV <span>{botaoClicado ? (<MdDoneOutline />) : (<LiaFileDownloadSolid/>)}</span>
                            </button>
                        </a>
                    </div>

                </div>
            </section>

        </main>
    );
}