'use client';
import { useState } from "react"; // módulo state
import estilos from "./page.module.css"; // estilos
// componentes e pages
import Topo from "@/componentes/Topo";
import Projetos from "@/componentes/Projetos";
import SobreMim from "./sobreMim/page";
import Habilidades from "./habilidades/page";
import Link from "next/link";


export default function Home() {
// imagens
const pro1 = "/projetos/projeto1.png";
const pro2 = "/projetos/projeto2.png";
const pro3 = "/projetos/projeto3.png";
const pro4 = "/projetos/projeto4.png";
const pro5 = "/projetos/projeto5.png";
const pro6 = "/projetos/projeto6.png";
const pro7 = "/projetos/projeto7.png";


// variavél de estado
const [clicado, setClicado] = useState(false);

  return (
    <div className={estilos.container_mae} id='topo'>
    <main className={estilos.main}>
      <section className={estilos.secao_topo} id='lucas'>
      <Topo />
      </section>

      <section className={estilos.secao_projetos} id='projetos'>
        
     {/* projeto 1 */}
            <Projetos
            nome={'PÁGINA WEB - FORMULÁRIO'}
            imagem={pro1}
            link_projeto={'https://formulario-agencia-viagens.vercel.app/'}
            github={'https://github.com/lucas-devworks/FORMULARIO-AGENCIA-VIAGENS.git'}
          />

                   {/* projeto 2 */}
            <Projetos
            nome={'PROJETO - SORTEADOR NUMÉRICO'}
            imagem={pro2}
            link_projeto={'https://sorteador-numerico-editavel.vercel.app/'}
            github={'https://github.com/lucas-devworks/SORTEADOR_NUMERICO_EDITAVEL.git'}
          />

          {/* projeto 3 */}
          <Projetos
            nome={'PROJETO - SORTEADOR DE NOMES'}
            imagem={pro3}
            link_projeto={'https://projeto-sorteio-nomes.vercel.app/'}
            github={'https://github.com/lucas-devworks/PROJETO_SORTEIO_NOMES.git'}
          />

     {/* projeto 4 */}
          <Projetos
            nome={'PÁGINA WEB - ÓTICAS VIDA'}
            imagem={pro4}
            link_projeto={'https://website-otica.vercel.app/'}
            github={'https://github.com/lucas-devworks/website-otica.git'}
          />

          {/* projeto 5 */}
          <Projetos
            nome={'PÁGINA WEB - SORVETERIA'}
            imagem={pro5}
            link_projeto={'https://sorveteria-web.vercel.app/'}
            github={'https://github.com/lucas-devworks/pagina-sorveteria.git'}
          />

          {/* projeto 6 */}
          <Projetos
            nome={'PÁGINA WEB - DARKMODE'}
            imagem={pro6}
            link_projeto={'https://web-dark-topaz.vercel.app/'}
            github={'https://github.com/lucas-devworks/web-dark-page.git'}
          />

          {/* projeto 7 */}
          <Projetos
            nome={'PROJETO - CARDÁPIO DINÂMICO'}
            imagem={pro7}
            link_projeto={'https://cardapioreact.vercel.app/'}
            github={'https://github.com/lucas-devworks/cardapio_dinamico.git'}
          />

      </section>
    </main>

      {/* sobre mim */}
      <section className={estilos.sobre_mim} id='sobre_mim'>
        <SobreMim 
          clicado={clicado} 
          setClicado={setClicado}
        />
      </section>

        {/* habilidades */}
        <section className={estilos.tecnologias} id='habilidades'>
            <Habilidades />
        </section>

        {/* rodapé */}
      <footer className={estilos.rodape}>
        <p>Copyright © 2024 <br/> <Link href='#lucas'>Lucas Teixeira Santos</Link></p>
      </footer>
  </div>
  )
};
