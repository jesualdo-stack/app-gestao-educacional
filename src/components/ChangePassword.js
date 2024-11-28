import React, { useState } from 'react';

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione aqui a lógica para validar e alterar a senha
    console.log('Senha Atual:', currentPassword);
    console.log('Nova Senha:', newPassword);
  };

  return (
    <div className="change-password-container">
      <h2>Alterar Senha</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Senha Atual:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nova Senha:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Alterar Senha</button>
      </form>
    </div>
  );
}

export default ChangePassword;
