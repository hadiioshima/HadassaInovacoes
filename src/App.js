import './App.css';
//npm install react-router-dom
import{BrowserRouter, Routes,Route} from 'react-router-dom';

import Footer from './componentes/Footer/index.js';
import Header from './componentes/Header/index.js';
import Home from './componentes/Home/index.js';

import Projeto  from './componentes/Projetos/index.js';
import Servicos from './componentes/Servicos/index.js';
import Contato from './componentes/Contato/index.js';
import DetalhesServicos from './componentes/Servicos/DetalhesServico.js';


function App() {
  return (
    <>
    
    <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projetos' element={<Projeto/>} />
            <Route path='/servicos' element={<Servicos />} />
            <Route path='/ contato' element={<Contato />} />
            <Route path="/detalheServico/:id" contato={<Contato />} />
            <Route path="/detalheServico/ :id" element={<DetalhesServicos/>} />
          </Routes>
        </BrowserRouter>
        <Home  />
    </>
  );
}

export default App;