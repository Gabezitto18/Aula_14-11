import { Link } from "react-router";
import "./header.css"
function Header() {
    return (
      <header>
        <h2>Gerenciador de Eventos SENAI</h2>
        <nav>
          <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link> <Link to="/cadastro"> Cadastrar Evento</Link>|{" "}
        
        </nav>
      </header>
    );
  }
  export default Header;
  
  