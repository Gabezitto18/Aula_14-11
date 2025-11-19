// Importa as bibliotecas principais do React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa o componente principal da aplicação
import App from './App';

// Importa o CSS global
import './style.css';

// Seleciona a <div id="root"> dentro do index.html
const rootElement = document.getElementById("root");

// Cria a raiz React (ponto de montagem)
const root = ReactDOM.createRoot(rootElement);

// Renderiza o App dentro do React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
