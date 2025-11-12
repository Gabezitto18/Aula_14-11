function Evento(nome,data,local) {
    return (
      <div>
        <h3>{nome}</h3>{" "}
        {/Exibe o nome do evento a partir dos dados recebidos do props/}
        <p>data: {data}</p>{" "}
        <p>Local: {local}</p>{" "}
       </div>
    );
 
      }
        export default Evento; 
