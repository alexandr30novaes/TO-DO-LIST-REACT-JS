import { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-txt" 
        type="text" 
        placeholder="Digite uma tarefa" 
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskInput;