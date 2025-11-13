// Esta linha define uma função chamada "Evento"
// Ela recebe um parâmetro chamado "props", que contém os dados passados para o componente
function Evento(nome,data,local) {
  return (
    <div className="evento">
      <h3>{nome}</h3>{" "}
     <p>nome: {nome}</p>{" "}
     <p>data: {data}</p>{" "}
     <p>local: {local}</p>{" "}
    </div>
  );

    }
      export default Evento;