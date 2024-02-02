import React from 'react';
import { Link } from 'react-router-dom';

const ListTask = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div>
      <h2>All Tasks</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`list-group-item ${task.isFinished ? 'bg-success' : ''}`}
          >
            {task.title}
            <div className="float-right">
              <Link to={`/edit-task/${task.id}`} className="btn btn-warning mr-2">
                Edit
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
