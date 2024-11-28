import React, { useState, useEffect } from 'react';

function Forums() {
  const [topic, setTopic] = useState('');
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const storedTopics = JSON.parse(localStorage.getItem('topics')) || [];
    setTopics(storedTopics);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const loggedInUser = localStorage.getItem('loggedInUser');
    const newTopic = { user: loggedInUser, title: topic, messages: [], timestamp: new Date().toLocaleString() };
    const updatedTopics = [...topics, newTopic];
    setTopics(updatedTopics);
    localStorage.setItem('topics', JSON.stringify(updatedTopics));
    setTopic('');
  };

  const addMessage = (topicIndex, message) => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const updatedTopics = [...topics];
    updatedTopics[topicIndex].messages.push({ user: loggedInUser, text: message, timestamp: new Date().toLocaleString() });
    setTopics(updatedTopics);
    localStorage.setItem('topics', JSON.stringify(updatedTopics));
  };

  return (
    <div className="forums-container">
      <h2>Fóruns</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Título do Tópico"
          required
        />
        <button type="submit">Criar Tópico</button>
      </form>
      <div className="topics">
        {topics.map((topic, index) => (
          <div key={index} className="topic">
            <h3>{topic.title}</h3>
            <p><strong>Criado por:</strong> {topic.user} em {topic.timestamp}</p>
            <div className="messages">
              {topic.messages.map((msg, msgIndex) => (
                <div key={msgIndex} className={`message ${msg.user === localStorage.getItem('loggedInUser') ? 'own-message' : ''}`}>
                  <p><strong>{msg.user}:</strong> {msg.text}</p>
                  <span>{msg.timestamp}</span>
                </div>
              ))}
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const message = e.target.elements.message.value;
              addMessage(index, message);
              e.target.reset();
            }}>
              <textarea name="message" placeholder="Escreva uma mensagem..." required />
              <button type="submit">Enviar</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forums;
