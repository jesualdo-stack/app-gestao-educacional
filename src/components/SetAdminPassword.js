import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SetAdminPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      // Salvar a senha do administrador no localStorage
      localStorage.setItem('adminPassword', password);
      alert('Senha do administrador definida com sucesso!');
      // Redirecionar para a página de login
      navigate('/login');
    } else {
      alert('As senhas não coincidem. Por favor, tente novamente.');
    }
  };

  return (
    <div className="set-password-container">
      <h2>Definir Senha do Administrador</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirmar Senha:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Definir Senha</button>
      </form>
    </div>
  );
}

export default SetAdminPassword;
