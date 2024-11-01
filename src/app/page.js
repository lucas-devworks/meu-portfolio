'use client';
import { useState } from "react"; // módulo state
import estilos from "./page.module.css"; // estilos
// componentes e pages
import Topo from "@/componentes/Topo";
import Projetos from "@/componentes/Projetos";
import SobreMim from "./sobreMim/page";
import Habilidades from "./habilidades/page";
// imagens do projeto
import pro1 from '@/../public/projetos/projeto1.png';
import pro2 from '@/../public/projetos/projeto2.png';
import pro3 from '@/../public/projetos/projeto3.png';
import pro4 from '@/../public/projetos/projeto4.png';
import pro5 from '@/../public/projetos/projeto5.png';
import pro6 from '@/../public/projetos/projeto6.png';
import pro7 from '@/../public/projetos/projeto7.png';
import Link from "next/link";


export default function Home() {

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
            link_projeto={'https://formulario-agencia-viagens.vercel.app/'}
            imagem={pro1}
            github={'https://github.com/lucas-devworks/FORMULARIO-AGENCIA-VIAGENS.git'}
          />

          {/* projeto 2 */}
          <Projetos
            nome={'PROJETO - SORTEADOR NUMÉRICO'}
            link_projeto={'https://sorteador-numerico-editavel.vercel.app/'}
            imagem={pro2}
            github={'https://github.com/lucas-devworks/SORTEADOR_NUMERICO_EDITAVEL.git'}
          />

          {/* projeto 3 */}
          <Projetos
            nome={'PROJETO - SORTEADOR DE NOMES'}
            link_projeto={'https://projeto-sorteio-nomes.vercel.app/'}
            imagem={pro3}
            github={'https://github.com/lucas-devworks/PROJETO_SORTEIO_NOMES.git'}
          />

     {/* projeto 4 */}
     <Projetos
            nome={'PÁGINA WEB - ÓTICAS VIDA'}
            link_projeto={'https://website-otica.vercel.app/'}
            imagem={pro4}
            github={'https://github.com/lucas-devworks/website-otica.git'}
          />

          {/* projeto 5 */}
          <Projetos
            nome={'PÁGINA WEB - SORVETERIA'}
            link_projeto={'https://sorveteria-web.vercel.app/'}
            imagem={pro5}
            github={'https://github.com/lucas-devworks/pagina-sorveteria.git'}
          />

          {/* projeto 6 */}
          <Projetos
            nome={'PÁGINA WEB - DARKMODE'}
            link_projeto={'https://web-dark-topaz.vercel.app/'}
            imagem={pro6}
            github={'https://github.com/lucas-devworks/web-dark-page.git'}
          />

          {/* projeto 7 */}
          <Projetos
            nome={'PROJETO - CARDÁPIO DINÂMICO'}
            link_projeto={'https://cardapioreact.vercel.app/'}
            imagem={pro7}
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
