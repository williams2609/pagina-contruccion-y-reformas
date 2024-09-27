import './App.css';
import BarraNavegacion from './componentes/BarraNavegacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './paginas/Home';
import Proyectos from './paginas/Proyectos'
import SoBreNosotros from './paginas/SobreNosotros';

import PaginaContacto from './paginas/PaginaContacto';

function App() {
  return (
    <div className="App">
      <BarraNavegacion></BarraNavegacion>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SobreNosotros" element={<SoBreNosotros/>}/>
        <Route path="/NuestrosProyectos" element={<Proyectos/>}/>
        <Route path="/Contacto" element={<PaginaContacto/>}/>
      </Routes>

    </Router>

    </div>
  );
}

export default App;
