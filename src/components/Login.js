import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [nip, setNip] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('NIP:', nip);
    console.log('Senha:', password);

    const adminPassword = localStorage.getItem('adminPassword');
    console.log('Senha do Administrador no localStorage:', adminPassword);

    // Verificar se é o administrador
    if (password === adminPassword) {
      alert('Login bem-sucedido como administrador!');
      localStorage.setItem('loggedInUserNIP', nip); // Armazenar o NIP do usuário logado
      localStorage.setItem('loggedInUserName', 'Administrador'); // Nome fictício do administrador
      return navigate('/home');
    }

    // Verificar se é um usuário normal
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.nip === nip && user.password === password);

    if (user) {
      alert('Login bem-sucedido!');
      localStorage.setItem('loggedInUserNIP', nip); // Armazenar o NIP do usuário logado
      localStorage.setItem('loggedInUserName', user.name); // Armazenar o nome do usuário logado
      navigate('/home');
    } else {
      alert('NIP ou senha inválidos.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>NIP:</label>
          <input
            type="text"
            value={nip}
            onChange={(e) => setNip(e.target.value)}
            pattern="\d{8}"
            title="O NIP deve conter 8 dígitos"
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
