import React, { useState, useEffect } from "react";

// SERVICES
import taskService from './services/taskService';

function App() {
  const [tasks, settasks] = useState(null);

  useEffect(() => {
    if (!tasks) {
      getTasks();
    }
  })

  const getTasks = async () => {
    let res = await taskService.getAll();
    console.log(res);
    settasks(res);
  }

  const renderTask = task => {
    return (
      <li key={task._id} className="list__item task">
        <h3 className="task__title">{task.title}</h3>
        <p className="task__category">{task.description}</p>
        <p className="task__description">{task.description}</p>
        <p className="task__due_by">{task.due_by}</p>
        <p className="task__created">{task.created}</p>
        <p className="task__status">{task.status}</p>
        <p className="task__id">{task._id}</p>

      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(tasks && tasks.length > 0) ? (
          tasks.map(task => renderTask(task))
        ) : (
            <p>No tasks found</p>
          )}
      </ul>
    </div>
  );
}

export default App;
