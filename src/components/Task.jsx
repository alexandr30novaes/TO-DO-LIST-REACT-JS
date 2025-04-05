const Task = ({ task, onRemove, onToggle }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span onClick={() => onToggle(task.id)}>{task.text}</span>
      <button onClick={() => onRemove(task.id)}>Remover</button>
    </li>
  );
};

export default Task;