import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Task Manager
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                All Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/task-finish" className="nav-link">
                Finished Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-task" className="nav-link">
                Add Task
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
