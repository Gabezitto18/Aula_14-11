import React, { useState } from "react";
import "./cadastroEvento.css";
import

function CadastroEvento() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && data && local) {
      setMensagem("Evento cadastrado com sucesso!");
      setNome("");
      setData("");
      setLocal("");
    } else {
      setMensagem("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="cadastro-evento">
      <h1>Cadastro de Evento</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome do Evento</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Data</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <label>Local</label>
        <input
          type="text"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          required
        />
        <div className="botoes">
           <button type="submi" className="btn-salvar"> Salvar Evento</button>
           <button type="button" className="btn-salvar" onClick={() => Navigate("/")}> <Voltar </button>
           </div>

      
      </form>

      {mensagem && (
        <p
          className={`mensagem ${
            mensagem.includes("sucesso") ? "sucesso" : "erro"
          }`}
        >
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default CadastroEvento;
