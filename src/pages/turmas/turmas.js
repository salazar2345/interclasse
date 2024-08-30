import React from 'react';
import { Link } from 'react-router-dom';
// import './faseum.css';
import imagem12 from '../../assets/imagem12.png'
import { VscAccount } from "react-icons/vsc";
import { ImHeadphones } from "react-icons/im";
import imagem8 from '../../assets/imagem8.png'



function Faseum() {
  return (
    <div className="App">
      {/* Barra Vermelha */}
      <div className="top-bar"></div>

      

      {/* Lista de Esportes */}
      <div className="sports-list">
      <div className='sesi'>
        <img src={imagem8}/>
      </div>
        <Link to="/basquete">BASQUETE</Link>
        <Link to="/futsal">FUTSAL</Link>
        <Link to="/volei">VÔLEI</Link>
        <Link to="/futmesa">FUTMESA</Link>
        <Link to="/queimada">QUEIMADA</Link>
        <Link to="/queimada">HANDBOL</Link>
        <Link to="/atletismo">ATLETISMO</Link>
        <Link to="/tenis-mesa">TÊNIS/MESA</Link>

        <div className="icon">
           <VscAccount size={27} />
           </div>
           <div className="icon2">
           <ImHeadphones size={27} />
           </div>
      </div>
     

      {/* Barra no meio com imagem */}
      <div className="middle-bar">
        <img src={imagem12} alt="Imagem do Meio" className="middle-bar-image" />
      </div>
    

       
    </div>
  );
}

export default Faseum;
