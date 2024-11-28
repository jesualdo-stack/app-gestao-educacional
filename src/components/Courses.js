import React, { useState } from 'react';

function Courses() {
  const [courseName, setCourseName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Curso inscrito:', courseName);
    // Adicione a lógica para processar a inscrição do curso
  };

  return (
    <div>
      <h2>Gestão de Cursos e Inscrições</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do Curso:
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </label>
        <button type="submit">Inscrever</button>
      </form>
    </div>
  );
}

export default Courses;
