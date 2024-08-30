import React from 'react';
import { Link } from 'react-router-dom';
import imagem13 from '../../assets/imagem13.png'
import { VscAccount } from "react-icons/vsc";
import { ImHeadphones } from "react-icons/im";
import imagem8 from '../../assets/imagem8.png'
import Footer from '../footer';



function Faseum() {
  return (
    <div className="App">
      {/* Barra Vermelha */}
      <div className="top-bar"></div>

      

      {/* Lista de Esportes */}
      <div className="sports-list">
      <div className='sesi'>
      <a href='/'><img src={imagem8}></img></a>
      </div>
        <Link to="/basquete">BASQUETE</Link>
        <Link to="/futsal">FUTSAL</Link>
        <Link to="/volei">VÔLEI</Link>
        <Link to="/futmesa">FUTMESA</Link>
        <Link to="/queimada">QUEIMADA</Link>
        <Link to="/handbol">HANDBOL</Link>
        <Link to="/atletismo">ATLETISMO</Link>
        <Link to="/tenis-mesa">TÊNIS/MESA</Link>

        
      </div>
     

      {/* Barra no meio com imagem */}
      <div className='tabelas'>
      <div className="tabela">
      <p style={{fontWeight:900, marginBottom:40}}>BASQUETE FEMININO E MASCULINO - GRUPO 2</p>
      <table>
  <tr>
    <th>BÉLGICA 9º B</th>
    <th>X</th>
    <th>ITÁLIA 1ºA</th>
  </tr>
  <tr>
    <th>ANGOLA 3º A</th>
    <th>X</th>
    <th>ALEMANHA 2°B</th>
  </tr>
  <tr>
    <th>ITÁLIA 1ºA</th>
    <th>X</th>
    <th>ANGOLA 3ºA</th>
  </tr>
  <tr>
    <th>ALEMANHA 2°B</th>
    <th>X</th>
    <th>BÉLGICA 9º B</th>
  </tr>
  <tr>
    <th>ALEMANHA 2°B</th>
    <th>X</th>
    <th>ITÁLIA 1ºA</th>
  </tr>
  <tr>
    <th>BÉLGICA 9º B</th>
    <th>X</th>
    <th>ANGOLA 3º A</th>
  </tr>
</table>
</div>
    <div className='tabela2'>
    <p style={{fontWeight:900, marginBottom:40}}>BASQUETE FEMININO E MASCULINO - GRUPO 2</p>
<table>
  <tr>
    <th>BÉLGICA 9º B</th>
    <th>X</th>
    <th>ITÁLIA 1ºA</th>
  </tr>
  <tr>
    <th>ANGOLA 3º A</th>
    <th>X</th>
    <th>ALEMANHA 2°B</th>
  </tr>
  <tr>
    <th>ITÁLIA 1ºA</th>
    <th>X</th>
    <th>ANGOLA 3ºA</th>
  </tr>
  <tr>
    <th>ALEMANHA 2°B</th>
    <th>X</th>
    <th>BÉLGICA 9º B</th>
  </tr>
  <tr>
    <th>ALEMANHA 2°B</th>
    <th>X</th>
    <th>ITÁLIA 1ºA</th>
  </tr>
  <tr>
    <th>BÉLGICA 9º B</th>
    <th>X</th>
    <th>ANGOLA 3º A</th>
  </tr>
</table>


      </div>
      </div>

      <div className='tabelas'>
      <div className="tabela">
      <p style={{fontWeight:900, marginBottom:40}}>SEMI FINAL BASQUETE</p>
      <table>
    
  <tr>
    <th>BÉLGICA 9º B</th>
    <th>X</th>
    <th>ITÁLIA 1ºA</th>
  </tr>
  <tr>
    <th>ANGOLA 3º A</th>
    <th>X</th>
    <th>ALEMANHA 2°B</th>
  </tr>
  <tr>
    <th>ITÁLIA 1ºA</th>
    <th>X</th>
    <th>ANGOLA 3ºA</th>
  </tr>
  <tr>
    <th>ALEMANHA 2°B</th>
    <th>X</th>
    <th>BÉLGICA 9º B</th>
  </tr>
</table>
</div>
    <div className='tabela2'>
    <p style={{fontWeight:900, marginBottom:40}}>FINAL BASQUETE</p>
<table>
  <tr>
    <th>BÉLGICA 9º B</th>
    <th>X</th>
    <th>ITÁLIA 1ºA</th>
  </tr>
  <tr>
    <th>ANGOLA 3º A</th>
    <th>X</th>
    <th>ALEMANHA 2°B</th>
  </tr>
</table>


      </div>
      </div>



    

       <Footer/>
    </div>
  );
}

export default Faseum;
