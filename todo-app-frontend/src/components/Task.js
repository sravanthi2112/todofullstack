// src/components/Task.js

import React from 'react';

const Task = ({ task, onUpdate, onDelete }) => (
  <div className="task">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onUpdate({ ...task, completed: !task.completed })}
    />
    <span>{task.title}</span>
    <button onClick={() => onDelete(task._id)}>Delete</button>
  </div>
);

export default Task;
