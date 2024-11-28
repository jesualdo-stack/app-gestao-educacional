import React, { useState, useEffect } from 'react';

function Communication() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const loggedInUser = localStorage.getItem('loggedInUser');
    const newMessage = { user: loggedInUser, text: message, timestamp: new Date().toLocaleString() };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
    setMessage('');
  };

  return (
    <div className="communication-container">
      <h2>Comunicação com Instrutores</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user === localStorage.getItem('loggedInUser') ? 'own-message' : ''}`}>
            <p><strong>{msg.user}:</strong> {msg.text}</p>
            <span>{msg.timestamp}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva sua mensagem..."
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Communication;
