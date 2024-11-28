import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Courses from './components/Courses';
import Communication from './components/Communication';
import Forums from './components/Forums';
import Library from './components/Library';
import Evaluation from './components/Evaluation';
import Feedback from './components/Feedback';
import Help from './components/Help';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import ChangePassword from './components/ChangePassword';
import SetAdminPassword from './components/SetAdminPassword';

function NavBar() {
  const navigate = useNavigate();
  const loggedInUserNIP = localStorage.getItem('loggedInUserNIP');
  const loggedInUserName = localStorage.getItem('loggedInUserName');

  const handleLogout = () => {
    localStorage.removeItem('loggedInUserNIP');
    localStorage.removeItem('loggedInUserName');
    navigate('/login');
  };

  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/courses">Gestão de Cursos e Inscrições</Link></li>
        <li><Link to="/communication">Comunicação com Instrutores</Link></li>
        <li><Link to="/forums">Fóruns</Link></li>
        <li><Link to="/library">Biblioteca Digital</Link></li> {/* Adicione o link para biblioteca */}
        <li><Link to="/evaluation">Avaliação de Cursos e Instrutores</Link></li>
        <li><Link to="/feedback">Feedback dos Módulos</Link></li>
        <li><Link to="/help">Ajuda</Link></li>
        {loggedInUserNIP && loggedInUserName && (
          <>
            <li className="user-info">{loggedInUserName} (NIP: {loggedInUserNIP})</li>
            <li><button onClick={handleLogout}>Sair</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirecionar para login */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/set-admin-password" element={<SetAdminPassword />} />
          <Route path="/home" element={<Home />} /> {/* Adicione a rota para a página inicial */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/library" element={<Library />} /> {/* Adicione a rota para biblioteca */}
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
