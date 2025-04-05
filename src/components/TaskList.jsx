import Task from './Task';

const TaskList = ({ tasks, onRemoveTask, onToggleTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          onRemove={onRemoveTask} 
          onToggle={onToggleTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;