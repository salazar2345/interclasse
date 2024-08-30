import React from 'react';
import '../Home.css';
import Imagem from '../assets/imagem2.png';
import imagem2 from '../assets/imagem2.png';
import imagem3 from '../assets/imagem4,png.png'; // Correção do nome do arquivo
import { VscAccount } from "react-icons/vsc";
import { ImHeadphones } from "react-icons/im";
import Footer from './footer';

function App() {
  const grades = ['9ºA', '9ºB', '1ºA', '1ºB', '2ºA', '2ºB', '3ºA', '3ºB'];
  const sports = ['BASQUETE', 'FUTSAL', 'VÔLEI', 'FUTMESA', 'QUEIMADA', 'FUTMESA', 'ATLETISMO', 'TÊNIS/MESA'];

  return (
    <div className="App">
      <img src={Imagem} alt="Imagem principal" className="main-image" />
      
      <div className="sports-container">
        <ul id='sports-list'>
          <a href='/basquete'>BASQUETE</a>
          <a href='/futsal'>FUTSAL</a>
          <a href='/volei'>VÔLEI</a>
          <a href='/queimada'>QUEIMADA</a>
          <a href='/tenis-mesa'>TENIS/MESA</a>
          <a href='/handbol'>HANDBOL</a>
          <a href='/atletismo'>ATLETISMO</a>
          <a href='/futmesa'>FUTMESA</a>
            
          
        </ul>
        
      </div>
     

      <div className="team-table">
        <h1>Tabela das Equipes</h1>
        <table>
          <thead>
            <tr>
              <th>Turma</th>
              {sports.map((sport, index) => (
                <th key={index}>{sport}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={index}>
                <td>{grade}</td>
                {sports.map((_, sportIndex) => (
                  <td key={sportIndex}>1</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p id='torneio'>TORNEIO CE 317</p>
      <div className="buttons-container">
        <a href='faseum'><button className="custom-button">1ª Fase</button></a>
       <a href='turmas'><button className="custom-button">Turmas</button></a>
      </div>
      

      <Footer/>

     
  
    </div>
  );
}

export default App;
