import { useState } from 'react';

const TaskForm = ({ agregarTarea }) => {
  const [texto, setTexto] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    agregarTarea(texto);
    setTexto('');
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;
