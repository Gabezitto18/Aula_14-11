import Evento from "../componentes/Evento";


function Home() {
  return (
    <main>
      <h1> Página Inicial</h1>
      <p>Bem-vindo ao Gerenciador de Eventos SENAI!</p>


      <Evento nome="Mundo SENAI" data="15/11/2025" local="Auditório 1" />
      <Evento nome="Semana da Indústria"
        data="22/11/2025"
        local="Laboratório 2"
      />
    </main>
  );
}


export default Home;
