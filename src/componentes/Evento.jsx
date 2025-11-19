// Esta linha define uma função chamada "Evento"
// Ela recebe um parâmetro chamado "props", que contém os dados passados para o componente
import "./evento.css";
import React from "react";

function Evento(props) {
    return (
      <div className="evento">
      <h3>{props.nome}</h3>{" "}
      <p> Data: {props.data}{" "}</p>
       <p> Local: {props.local}{" "}</p>
      </div>
    );
  
      }
   export default Evento;
