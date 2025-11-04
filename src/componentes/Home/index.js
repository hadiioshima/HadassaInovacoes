
import ProjetosHome from './ProjetosHome.js';

function Home (){

    return (
       <main>
        <section id="home">
          <p>A inovação é um processo que acontece para se aprimorar algo,como: produtos, serviços, processos ou modelos, melhorando cada vez mais.</p>
        </section>

        <section id="projetos">
          <h1>Projetos</h1>
          <ProjetosHome />
        </section>

        <section id="serviços">
          <h1>Serviços</h1>
        </section>

        <section id="contato">
          <h1>Contato</h1>
        </section>
      </main>

    )
}

export default Home;