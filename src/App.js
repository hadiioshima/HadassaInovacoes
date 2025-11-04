import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Projeto from './componentes/Projetos';
import Servicos from './componentes/Servicos';
import Contato from './componentes/Contato';
import DetalhesServicos from './componentes/Servicos/DetalhesServico';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projetos' element={<Projeto />} />
        <Route path='/servicos' element={<Servicos />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/detalheServico/:id' element={<DetalhesServicos />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
