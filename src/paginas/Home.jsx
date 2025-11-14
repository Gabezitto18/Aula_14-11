import Evento from "../componentes/Evento";

function Home() {
  return (
    <div className="pagina-inicio">
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao Gerenciador de Eventos SENAI!</p>

      <div className="conteudo-principal">
        <div className="container">
          <Evento nome="Mundo SENAI" data="15/11/2025" local="Auditório 1" />
        </div>

        <div className="container">
          <Evento nome="Dias Suficientes de Outono" data="17/12/2025" local="Avenida Mirabel" />
        </div>

        <div className="container">
          <Evento nome="Semana da Indústria" data="22/11/2025" local="Laboratório 2" />
        </div>
      </div>
    </div>
  );
}

export default Home;
