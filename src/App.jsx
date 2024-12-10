import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [mensaje, setMensaje] = useState('');

  // Mostrar un mensaje cuando se agregue la primera tarea
  useEffect(() => {
    if (tareas.length === 1) {
      setMensaje('¡Has agregado tu primera tarea! 🎉');
      setTimeout(() => setMensaje(''), 3000); // Ocultar el mensaje después de 3 segundos
    }
  }, [tareas]);

  const manejarTareas = (nuevasTareas) => setTareas(nuevasTareas);

  return (
    <div>
      <h1>Gestor de Tareas</h1>
      <p style={{ color: 'green' }}>{mensaje ? mensaje : ''}</p>
      <TaskForm agregarTarea={(texto) => manejarTareas([...tareas, { id: Date.now(), texto, completada: false }])} />
      <TaskList
        tareas={tareas}
        alternarTarea={(id) =>
          manejarTareas(tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)))
        }
        eliminarTarea={(id) => manejarTareas(tareas.filter((t) => t.id !== id))}
      />
    </div>
  );
};

export default App;
