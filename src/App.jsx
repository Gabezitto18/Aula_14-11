import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import './style.css';
import Evento from "./componentes/Evento";
import CadastroEvento from "./paginas/CadastroEvento";
import Home from "./paginas/Home";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Cabeçalho do site */}
        <Header />

        {/* Menu de navegação */}
        <nav className="menu-principal">
          <Link to="/">Início</Link>
          <Link to="/evento">Evento</Link>
          <Link to="/cadastrar">Cadastrar Evento</Link>
        </nav>

        {/* Rotas do site */}
        <main className="conteudo-principal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evento" element={<Evento />} />
            <Route path="/cadastrar" element={<CadastroEvento />} />
          </Routes>
        </main>

        {/* Rodapé do site */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
