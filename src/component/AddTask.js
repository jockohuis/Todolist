import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // importez useNavigate au lieu de useHistory

const AddTask = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const navigate = useNavigate(); // utilisez useNavigate au lieu de useHistory

  const handleAddTask = () => {
    if (taskTitle.trim() !== '') {
      const newTask = {
        id: new Date().getTime(),
        title: taskTitle,
        isFinished: false,
      };
      addTask(newTask);
      navigate('/'); // utilisez navigate au lieu de history.push
    }
  };

  return (
    <div>
      <h2>Ajouter une tâche</h2>
      <div className="form-group">
        <label htmlFor="taskTitle">Titre de la tâche</label>
        <input
          type="text"
          className="form-control"
          id="taskTitle"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddTask}>
        Ajouter la tâche
      </button>
    </div>
  );
};

export default AddTask;
