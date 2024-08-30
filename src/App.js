import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Faseum from '../src/pages/faseum/faseum'
import Turmas from '../src/pages/turmas/turmas'
import Basquete from'../src/pages/basquete/basquete'
import Futsal from '../src/pages/FUTSAL/futsal'
import Volei from '../src/pages/volei/volei'
import Futmesa from '../src/pages/futmesa/futmesa'
import Queimada from '../src/pages/queimada/queimada'
import Handbol from '../src/pages/handbol/handbol'
import Atletismo from '../src/pages/atletismo/atletismo'
import Tenis from './pages/tenis/tenismesa'



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faseum" element={<Faseum />} />
          <Route path="/turmas" element={<Turmas />} />
          <Route path="/basquete" element={< Basquete />} />
          <Route path="/futsal" element={< Futsal />} />
          <Route path="/volei" element={< Volei />} />
          <Route path="/futmesa" element={< Futmesa />} />
          <Route path="/queimada" element={< Queimada />} />
          <Route path="/handbol" element={< Handbol />} />
          <Route path="/atletismo" element={< Atletismo />} />
          <Route path="/tenis-mesa" element={< Tenis />} />
  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
