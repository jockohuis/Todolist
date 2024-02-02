import React from 'react';

const TaskFinish = ({ tasks }) => {
  return (
    <div>
      <h2>Finished Tasks</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item bg-success">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskFinish;
