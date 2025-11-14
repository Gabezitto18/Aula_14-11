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
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* Opcional: rota padrão */}
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
