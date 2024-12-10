const TaskList = ({ tareas, alternarTarea, eliminarTarea }) => (
    <ul>
      {tareas.map(({ id, texto, completada }) => (
        <li key={id}>
          <span
            style={{ textDecoration: completada ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => alternarTarea(id)}
          >
            {texto}
          </span>
          <button onClick={() => eliminarTarea(id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
  
  export default TaskList;
  