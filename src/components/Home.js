import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg.png'; // Certifique-se de que o caminho está correto

function Home() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logotipo" />
      <div className="menu">
        <h2>Divisão de Ensino do Comando do 8° Distrito Naval</h2>
        <ul>
          <li><Link to="/courses">Gestão de Cursos e Inscrições</Link></li>
          <li><Link to="/communication">Comunicação com Instrutores</Link></li>
          <li><Link to="/forums">Fóruns</Link></li>
          <li><Link to="/library">Biblioteca Digital</Link></li>
          <li><Link to="/evaluation">Avaliação de Cursos e Instrutores</Link></li>
          <li><Link to="/feedback">Feedback dos Módulos</Link></li>
          <li><Link to="/help">Ajuda</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
