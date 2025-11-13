// Importa as bibliotecas principais do React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa o componente principal da aplicação
import App from './App';

// Importa o CSS global (opcional)
import './style.css';

// 1 Seleciona a <div id="root"> dentro do index.html
const rootElement = document.getElementById("root");

//  Cria a raiz React (ponto de montagem)
const root = ReactDOM.createRoot(rootElement);

// 3Renderiza o App dentro do React.StrictMode (ajuda a detectar erros e boas práticas)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);