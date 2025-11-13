import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import "./style.css";
 
function App() {
  return (
    <Router>
      <div className="app">
        {/* Cabeçalho do site */}
        <Header />

       
        {/* Rotas do site */}
        <main className="conteudo-principal">
          <Routes>
            <Route path="/home" element={<Inicio />} />

            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>

        {/* Rodapé do site */}
        <Footer />
      </div>
    </Router>
  );
}
export default App;