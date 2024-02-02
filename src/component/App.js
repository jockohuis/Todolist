
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import ListTask from './ListTask';
import TaskFinish from './TaskFinish';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
  };

  return (
    <Router>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" exact
            element={<ListTask tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />}/>
          <Route path="/task-finish"
            element={<TaskFinish tasks={tasks.filter((task) => task.isFinished)} />} />
          <Route path="/add-task"
            element={<AddTask addTask={addTask} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
